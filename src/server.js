const http = require('http');
const getReq = require('./methods/get-req');
const postReq = require('./methods/post-req');
const putReq = require('./methods/put-req');
const deleteReq = require('./methods/delete-req');
let movies = require('../data/movies.json');
//require("dotenv").config();

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  req.movies = movies;
  switch (req.method) {
    case 'GET':
      getReq(req, res);
      break;
    case 'POST':
      postReq(req, res);
      break;
    case 'PUT':
      putReq(req, res);
      break;
    case 'DELETE':
      deleteReq(req, res);
      break;
    default:
      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json');
      res.write(
        JSON.stringify({ title: 'Not Found', message: 'Route not found' }),
      );
      res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
});
