const Item = require('../models/Item');

// Conventional RESTful routes

// Needs nexts
function searchRoute(req, res) {
  const sql = `SELECT * FROM items 
               WHERE item_name LIKE '%canon%' AND 
               lat >= 50 AND lat <= 51.5 AND 
               lng >= -4 AND lng <= -2
               LIMIT 20;`;

  Item
    .all(sql)
    .then(() => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify('hello world'));
    });

}

module.exports = { search: searchRoute };