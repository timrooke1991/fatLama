const db = require('../db/connect');

// Conventional RESTful routes

// Needs nexts
function searchRoute(req, res) {
  const searchTerm = req.query.searchTerm;
  const lat        = req.query.lat;
  const lng        = req.query.lng;
  const sql = `SELECT * FROM items 
               WHERE item_name LIKE '%${searchTerm}%' AND 
               lat >= 50 AND lat <= 51.5 AND 
               lng >= -4 AND lng <= -2
               LIMIT 20;`;

  console.log('running!');
  db.all(sql, function(err,rows) {
    // include header and status code
    return res.json(rows);
  });

}

module.exports = { search: searchRoute };