const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    return res.end();
  } else if(req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>About Us</h1>');
    return res.end();
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Page Not Found</h1>');
     res.end();
  }

})
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`)
})
