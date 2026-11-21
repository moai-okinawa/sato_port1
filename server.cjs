const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const files = { '/': ['index.html', 'text/html; charset=utf-8'], '/index.html': ['index.html', 'text/html; charset=utf-8'], '/style.css': ['style.css', 'text/css; charset=utf-8'], '/script.js': ['script.js', 'text/javascript; charset=utf-8'] };
files['/denko/'] = ['denko/index.html', 'text/html; charset=utf-8'];
for (const [name, type] of [['index.html', 'text/html'], ['style.css', 'text/css'], ['app.js', 'text/javascript'], ['past-exams.js', 'text/javascript'], ['official-mock.js', 'text/javascript'], ['official-mock-data.js', 'text/javascript']]) {
  files['/denko/' + name] = ['denko/' + name, type + '; charset=utf-8'];
}
http.createServer((req, res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname;
  const image = /^\/denko\/images\/item-\d{2}\.png$/.test(pathname);
  const photo = /^\/denko\/images\/past-\d{8}-[12]-1[678]\.jpg$/.test(pathname);
  const exam = /^\/denko\/exams\/\d{8}_co_second_[aq]0[12]\.pdf$/.test(pathname);
  const examPage = /^\/denko\/exam-pages\/\d{8}-[12]-(?:[5-9]|1[0-35])\.webp$/.test(pathname);
  const file = image ? [pathname.slice(1), 'image/png'] :
    photo ? [pathname.slice(1), 'image/jpeg'] :
    exam ? [pathname.slice(1), 'application/pdf'] :
    examPage ? [pathname.slice(1), 'image/webp'] : files[pathname];
  if (!file) { res.writeHead(404); res.end('Not found'); return; }
  fs.readFile(path.join(__dirname, file[0]), (error, data) => {
    if (error) { res.writeHead(error.code === 'ENOENT' ? 404 : 500); res.end('File unavailable'); return; }
    res.writeHead(200, { 'Content-Type': file[1] }); res.end(data);
  });
}).listen(3000, '127.0.0.1', () => console.log('Local: http://localhost:3000'));
