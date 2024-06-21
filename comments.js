// create web server
// create a web server that listens to port 3000
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// create a web server that listens to port 3000
http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  const filePath = path.join(__dirname, 'public', pathname);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('404 - Not Found');
      return;
    }
    res.end(data);
  });
}).listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});