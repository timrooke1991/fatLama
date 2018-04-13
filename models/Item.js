const levenshtein = require('js-levenshtein');

function getItems() {
  const sql = `SELECT * FROM items`;

  return sql;
}

function euclideanDistance(userLat, itemLat, userLng, itemLng) {
  return Math.hypot(userLat - itemLat, userLng - itemLng);
}

function textSimilarity(userText, itemName) {
  return levenshtein(userText, itemName);
}

module.exports = {
  getItems,
  euclideanDistance,
  textSimilarity
};
