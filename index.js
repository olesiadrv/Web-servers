
const http = require('http');
const hostname = 'localhost';
const port = 8000;

// TASK 1

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type' : 'text/plain'
//   });
//   res.end('Hello');
// });
// server.listen(port, hostname, () => {
//     console.log('running');
// });

// TASK 2

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type' : 'text/html'
//   });
//   res.end('<b>Hello, UKD!</b>');
// });
// server.listen(port, hostname, () => {
//     console.log('running');
// });


// TASK *

const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'})
      return res.end('404 Not Found')
    }  
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    return res.end()
  })
})
server.listen(port, hostname, () => {
  console.log('running')
})

