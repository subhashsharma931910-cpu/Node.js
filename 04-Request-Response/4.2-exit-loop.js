const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  process.exit(); // server ko band krne ke liye
})
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`)
})
