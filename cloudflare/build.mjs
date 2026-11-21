import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const output = new URL('_cloudflare/', root);
await mkdir(new URL('denko/', output), { recursive: true });
for (const file of ['index.html', 'style.css', 'script.js', 'denko/style.css', 'denko/app.js', 'denko/past-exams.js', 'denko/official-mock.js', 'denko/official-mock-data.js', 'denko/sync.js']) {
  await cp(new URL(file, root), new URL(file, output));
}
const lab = await readFile(new URL('denko/index.html', root), 'utf8');
await cp(new URL('denko/images/', root), new URL('denko/images/', output), { recursive: true });
await cp(new URL('denko/exams/', root), new URL('denko/exams/', output), { recursive: true });
await cp(new URL('denko/exam-pages/', root), new URL('denko/exam-pages/', output), { recursive: true });
await writeFile(new URL('denko/index.html', output), lab
  .replace('<script src="app.js">', '<script src="sync.js"></script><script src="app.js">')
  .replace('ローカル学習モード ●', '受講生向け学習モード')
  .replace('学習記録はこのブラウザーに保存されます。', '<span id="sync-status" role="status">学習記録を読み込んでいます。</span> <button type="button" id="sync-retry" hidden>再試行</button> <a href="/cdn-cgi/access/logout">ログアウト</a>'));
