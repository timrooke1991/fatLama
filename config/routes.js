const router = require('express').Router();
const items  = require('../controllers/items');

router.route('/search')
  .get(items.search);

router.all('/*', (req, res) => res.notFound());

module.exports = router;