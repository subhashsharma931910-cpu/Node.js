const { sumRequestHandler } = require('./sum')

const requestHandler = (req, res) => {
  console.log(req.url, req.method)

  if (req.url === '/') {
    res.setHeader('content-type', 'text/html')
    res.write('<h1>welcome to home</h1>')
    res.write('<a href="/calculator">Go To Calculator</a>')
    return res.end();
  } else if (req.url === '/calculator') {
    res.setHeader('content-type', 'text/html')
    res.write(`<h1>welcome to home</h1>
      <form action="/result" method="POST">
        <input type="text" name="num1" placeholder="Enter number 1" required>
        <input type="text" name="num2" placeholder="Enter number 2" required>
        <button type="submit">Add</button>
      </form>
    `)
    return res.end();
  }
  else if (req.url === '/result' && req.method === 'POST') {
    return sumRequestHandler(req, res)

  }

  res.setHeader('content-type', 'text/html')
  res.write('<h1>404 Page dose not Exist </h1>')
  res.write('<a href="/">Go To Home</a>')
  return res.end();

}

exports.requestHandler = requestHandler;