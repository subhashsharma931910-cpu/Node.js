
// simple node server
//method 1

/* const http = require('http');

function requestLister(req, res) {
  console.log(req)
}
http.createServer(requestLister) */


//method 2
//server chala or band ho gaya

/* const http = require('http');

http.createServer((req, res)=>{
  console.log(req)
})
  */

//method 3
//server chalta rahega jab tak hum manually stop na kare but hme nahi pata chal raha ki server chal raha hai
/*
const http = require('http');
const server = http.createServer((req, res)=>{
  console.log(req)
})
server.listen(3000)
*/

//final server

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req)
})
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`)
})


