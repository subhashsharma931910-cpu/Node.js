const sumRequestHandler = (req, res) => {
  const body = [];
  req.on('data', chunk => body.push(chunk));

  req.on('end', () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyobj = Object.fromEntries(params);
    const result = Number(bodyobj.num1) + Number(bodyobj.num2);

    res.setHeader('content-type', 'text/html');
    res.write(`<h1>Result: ${result}</h1>`);
    res.end();
  });
}

exports.sumRequestHandler = sumRequestHandler;