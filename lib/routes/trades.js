// eslint-disable-next-line new-cap
const router = require('express').Router();
const Trade = require('../models/trade');



router
  .get('/tradesByHour', (req, res, next) => {
    Trade.tradesByHour()
      .then(trades => res.json(trades))
      .catch(next);
  });

module.exports = router;