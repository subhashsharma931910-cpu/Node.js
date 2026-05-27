
const fs = require('fs')

const userRequestHandler= (req, res) => {
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



    const body = [];
    /* The code snippet you provided is handling the data stream that is being sent in the request. */
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    })
    req.on('end', () => {
      const fullbody = Buffer.concat(body).toString();
      console.log(fullbody);
      const params = new URLSearchParams(fullbody);

      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);

      // fs.writeFileSync('userInput.txt', JSON.stringify(bodyObject));
      //output: {name: 'subhash', grnder:'male'}

      //yaha pr hum ek json file create kar rhe hain jo ki blocking nature rkhti hai 
      //iska matlab hai ki jab bhi koi user data submit karega toh wo ek 
      //file create karega jisse ki server block ho jayega
      //ilsye hme hamesha writefile ka use krna cahahiye

      fs.writeFile('userInput.txt', JSON.stringify(bodyObject), error =>{
        console.log('file written successfully')
        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end();
      })
    })
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Form Submitted Successfully</h1>');
    res.end();
  } 
}

module.exports = userRequestHandler;