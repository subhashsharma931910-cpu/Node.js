const http = require('http');
const { url } = require('inspector');

const server = http.createServer((req, res) =>{
  console.log(req.url, req.method)
})
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})


// npm init command for initialise the projects
// npm install command for installing the packages
// npm install nodemon --save-dev for installing the nodemon package and save in dev dependencies
// npm install nodemon -g for installing the nodemon package globally
// npm run start for running the start script in package.json file



// npm install nodemon --save-dev for installing the nodemon package and save in dev dependencies

