const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader('Content-Type', 'text/html');
  if (req.url === '/home') {
    res.write('<h1>Welcome to our online store</h1>')
    return res.end();
  } else if (req.url === '/men') {
    res.write('<h1>Men Section</h1>')
    return res.end();
  } else if (req.url === '/women') {
    res.write('<h1>Women Section</h1>')
    return res.end();
  } else if (req.url === '/kids') {
    res.write('<h1>Kids Section</h1>')
    return res.end();
  }

  res.write(`
      <nav>
    <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/men">Men</a></li>
      <li><a href="/women">Women</a></li>
      <li><a href="/kids">Kids</a></li>
      <li><a href="/cart">Cart</a></li>
    </ul>
  </nav>`)

  return res.end();
})

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`)
})