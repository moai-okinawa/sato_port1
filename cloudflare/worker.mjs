const publicFiles = new Set(['/', '/index', '/index.html', '/style.css', '/script.js']);
const labFiles = new Set(['/denko', '/denko/', '/denko/index', '/denko/index.html', '/denko/style.css', '/denko/app.js', '/denko/past-exams.js', '/denko/official-mock.js', '/denko/official-mock-data.js', '/denko/sync.js']);
const recordsPath = '/denko/api/records';
const headers = { 'Cache-Control': 'private, no-store' };
let keys;

const decode = (part) => Uint8Array.from(atob(part.replaceAll('-', '+').replaceAll('_', '/')), c => c.charCodeAt(0));
const parse = (part) => JSON.parse(new TextDecoder().decode(decode(part)));
const reply = (status, error) => Response.json({ error }, { status, headers });

async function learnerId(request, env) {
  const token = request.headers.get('Cf-Access-Jwt-Assertion');
  const issuer = env.ACCESS_TEAM_URL;
  if (!token || token.length > 8192 || !env.ACCESS_AUD || !/^https:\/\/[a-z0-9-]+\.cloudflareaccess\.com$/.test(issuer)) return null;

  const parts = token.split('.');
  if (parts.length !== 3 || parts.some(part => !/^[\w-]+$/.test(part))) return null;
  try {
    const [head, body, signature] = parts;
    const { alg, kid } = parse(head);
    const claims = parse(body);
    const now = Date.now() / 1000;
    if (alg !== 'RS256' || typeof kid !== 'string' || claims.iss !== issuer ||
        !Array.isArray(claims.aud) || !claims.aud.includes(env.ACCESS_AUD) ||
        typeof claims.exp !== 'number' || claims.exp <= now ||
        (claims.nbf !== undefined && (typeof claims.nbf !== 'number' || claims.nbf > now)) ||
        !claims.email || typeof claims.sub !== 'string' || !claims.sub) return null;

    if (keys?.issuer !== issuer || keys.expires <= Date.now()) {
      const response = await fetch(issuer + '/cdn-cgi/access/certs');
      if (!response.ok) return null;
      const certs = await response.json();
      keys = { issuer, entries: certs.keys, expires: Date.now() + 300_000 };
    }
    const jwk = keys.entries.find(entry => entry.kid === kid);
    if (!jwk) return null;
    const algorithm = { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' };
    const key = await crypto.subtle.importKey('jwk', jwk, algorithm, false, ['verify']);
    const verified = await crypto.subtle.verify(algorithm, key, decode(signature), new TextEncoder().encode(head + '.' + body));
    return verified ? claims.sub : null;
  } catch {
    return null;
  }
}

function validEvent(event) {
  if (!event || !/^[a-f0-9-]{36}$/.test(event.key)) return false;
  if (event.kind === 'answer') {
    return Number.isSafeInteger(event.id) && event.id >= 0 && event.id < 54 &&
      typeof event.ok === 'boolean' && typeof event.day === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(event.day);
  }
  return event.kind === 'exam' && Number.isSafeInteger(event.date) && event.date > 0 &&
    event.date <= Date.now() + 86400_000 && Number.isInteger(event.score) && event.score >= 0 && event.score <= 100;
}

async function readEvent(request) {
  const reader = request.body?.getReader();
  if (!reader) return null;
  const bytes = new Uint8Array(2048);
  let length = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) return JSON.parse(new TextDecoder().decode(bytes.subarray(0, length)));
    if (length + value.length > bytes.length) {
      await reader.cancel();
      return null;
    }
    bytes.set(value, length);
    length += value.length;
  }
}

async function records(request, db, learner, url) {
  if (request.method === 'GET') {
    const after = Number(url.searchParams.get('after') ?? '0');
    if (!Number.isSafeInteger(after) || after < 0) return reply(400, 'Invalid cursor');
    const { results } = await db.withSession('first-primary')
      .prepare('SELECT seq, payload FROM study_events WHERE learner = ? AND seq > ? ORDER BY seq LIMIT 500')
      .bind(learner, after).all();
    return Response.json({ learner, events: results.map(row => JSON.parse(row.payload)),
      cursor: results.at(-1)?.seq ?? after, more: results.length === 500 }, { headers });
  }
  if (request.method !== 'POST') return reply(405, 'Method not allowed');
  if (request.headers.get('Origin') !== url.origin || request.headers.get('Content-Type') !== 'application/json') return reply(403, 'Invalid origin or content type');
  let body;
  try { body = await readEvent(request); } catch { return reply(400, 'Invalid JSON'); }
  if (!body) return reply(400, 'Invalid event body');
  if (body?.learner !== learner) return reply(409, 'Account changed');
  const { event } = body;
  if (!validEvent(event)) return reply(400, 'Invalid study event');
  await db.prepare('INSERT INTO study_events (learner, event_id, payload) VALUES (?, ?, ?) ON CONFLICT (learner, event_id) DO NOTHING')
    .bind(learner, event.key, JSON.stringify(event)).run();
  return new Response(null, { status: 204, headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (publicFiles.has(url.pathname)) return env.ASSETS.fetch(request);
    const labImage = /^\/denko\/images\/(?:item-\d{2}\.png|past-\d{8}-[12]-1[678]\.jpg)$/.test(url.pathname);
    const labExam = /^\/denko\/exams\/\d{8}_co_second_[aq]0[12]\.pdf$/.test(url.pathname);
    const examPage = /^\/denko\/exam-pages\/\d{8}-[12]-(?:[5-9]|1[0-35])\.webp$/.test(url.pathname);
    if (!labFiles.has(url.pathname) && !labImage && !labExam && !examPage && url.pathname !== recordsPath) return reply(404, 'Not found');
    const learner = await learnerId(request, env);
    if (!learner) return reply(403, 'Cloudflare Access sign-in required');
    if (url.pathname === recordsPath) return records(request, env.STUDY_DB, learner, url);
    if (url.pathname === '/denko') return Response.redirect(new URL('/denko/', url), 302);
    const asset = await env.ASSETS.fetch(request);
    const response = new Response(asset.body, asset);
    response.headers.set('Cache-Control', headers['Cache-Control']);
    return response;
  }
};
