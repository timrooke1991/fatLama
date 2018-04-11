const database = require('../db/connect');


// function constructSearchStatement(searchTerm) {
//   const sql = `SELECT * FROM items 
//                WHERE item_name LIKE '%${searchTerm}%' AND 
//                lat >= 50 AND lat <= 51.5 AND 
//                lng >= -4 AND lng <= -2
//                LIMIT 20;`;
    
//   return sql;
// }

const sql = `SELECT * FROM items 
               WHERE item_name LIKE '%canon%' AND 
               lat >= 50 AND lat <= 51.5 AND 
               lng >= -4 AND lng <= -2
               LIMIT 20;`;

database.all(sql, function(err, rows) {
  console.log('function triggered');
  
  rows.forEach(function(row) {
    console.log(row.item_name, row.lat);
  });
  console.log('complete');
  
});

module.exports = database;
