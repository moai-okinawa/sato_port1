const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const files = { '/': ['index.html', 'text/html; charset=utf-8'], '/index.html': ['index.html', 'text/html; charset=utf-8'], '/style.css': ['style.css', 'text/css; charset=utf-8'], '/script.js': ['script.js', 'text/javascript; charset=utf-8'] };
files['/denko-lab/dist/'] = ['denko-lab/dist/index.html', 'text/html; charset=utf-8'];
for (const [name, type] of [['index.html', 'text/html'], ['style.css', 'text/css'], ['app.js', 'text/javascript']]) {
  files['/denko-lab/dist/' + name] = ['denko-lab/dist/' + name, type + '; charset=utf-8'];
}
http.createServer((req, res) => {
  const file = files[new URL(req.url, 'http://localhost').pathname];
  if (!file) { res.writeHead(404); res.end('Not found'); return; }
  fs.readFile(path.join(__dirname, file[0]), (error, data) => {
    if (error) { res.writeHead(500); res.end('Server error'); return; }
    res.writeHead(200, { 'Content-Type': file[1] }); res.end(data);
  });
}).listen(3000, '127.0.0.1', () => console.log('Local: http://localhost:3000'));
