const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<title>hello wolrd</title>')
  res.write('<h1>welcome to coding</h1>');
})
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`)
})
