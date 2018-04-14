const similarity = require('jaro-winkler');

function getItems() {
  const sql = `SELECT * FROM items`;
  return sql;
}

// Make longitude and latitudes on a 0 - 1 scale; 
// 0 === minDistanceAway, 1 === maxDistanceAway
function normaliseCoordinates(userCoordinate, itemCoordinate, base) {
  return (userCoordinate - itemCoordinate) / base;
}

function calculateDistance(userLat, itemLat, userLng, itemLng) {
  const normalisedLat = normaliseCoordinates(userLat, itemLat, 90);
  const normalisedLng = normaliseCoordinates(userLng, itemLng, 180);

  return Math.hypot(normalisedLat, normalisedLng);
}

function calculateTextSimilarity(userText, itemName) {
  return similarity(userText, itemName, { caseSensitive: false });
}

function calculateRelevance(distance, similarity, factor) {
  
  const weight = 3 || factor;

  // Inverse distance; required to make it comparable to text
  const normalisedDistance = 1 - distance;
  
  return (similarity * weight) + normalisedDistance;

}

function compareRelevance(itemA, itemB) {
  if (itemA.relevance > itemB.relevance) return -1;
  if (itemA.relevance < itemB.relevance) return 1;
  return 0;
}

module.exports = {
  getItems,
  calculateDistance,
  calculateTextSimilarity,
  calculateRelevance,
  compareRelevance
};
