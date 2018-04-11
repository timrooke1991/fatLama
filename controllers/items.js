// const database = require('../db/connect');

// Conventional RESTful routes

// Needs nexts
function searchRoute(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(req.query));
}

module.exports = { search: searchRoute };