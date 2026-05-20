const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {

    res.setHeader('Content-Type', 'text/html');
    res.write(`<h1>Enter your details</h1>
      <form action="/submit" method="POST"> 
      <input type="text" name="name" placeholder="Enter your name" required>
      <input type="radio" name="gender" value='male'>
      <laber for='male' id='male'>male</label>
      <input type="radio" name="gender" value='female'>
      <laber for='female' id='female'>female</label>
      <input type="submit" value='submit'>
      </form>`
    );
    return res.end();
  }
  else if (req.url === '/submit' && req.method === 'POST') {

    const body=[];


/* The code snippet you provided is handling the data stream that is being sent in the request. */
    req.on('data', chunk =>{
      console.log(chunk);
      body.push(chunk);
    })
    req.on('end',()=>{
      const parsedbody= Buffer.concat(body).toString();
      console.log(parsedbody);
    })

    


    fs.writeFileSync('userInput.txt', 'subhash')
    res.statusCode = 302;
    res.setHeader('Location', '/')
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Form Submitted Successfully</h1>');
  res.end();
})
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`)
})
