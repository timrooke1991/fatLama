const database   = require('../db/connect');
const Item       = require('../models/Item');

function searchRoute(req, res) {
  // queryString search terms
  const { searchTerm, lat, lng } = req.query;

  // Consider sorting array for optimisation benefit
  const sqlGetItems = Item.getItems(searchTerm);
          
  database.all(sqlGetItems, (err, items) => {
    
    items.map((item) => {
      item['distance']       = Item.euclideanDistance(lat, item['lat'], lng, item['lng']);
      item['textsimilarity'] = Item.textSimilarity(searchTerm, item['item_name']);
      // Need to normalise the factors 
      // Function to add  in output if Top 20
    });

    // include header and status code
    return res.json(items);
  });
}

module.exports = { search: searchRoute };