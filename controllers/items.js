const database   = require('../db/connect');
const Item       = require('../models/item');

function searchRoute(req, res) {
  const { searchTerm, lat, lng } = req.query;

  const sqlGetItems = Item.getItems(searchTerm);
          
  database.all(sqlGetItems, (err, items) => {
    items.map((item) => {
      const itemDistance   = Item.calculateDistance(lat, item['lat'], lng, item['lng']);
      const itemSimilarity = Item.calculateTextSimilarity(searchTerm, item['item_name']);
      item['relevance']    = Item.calculateRelevance(itemDistance, itemSimilarity);
    });

    // sort from most relevant to least relevant
    items = items.sort(Item.compareRelevance);

    // Take the most relevant 20 items
    return res.json(items.splice(0, 20));
  });
}

module.exports = { search: searchRoute };