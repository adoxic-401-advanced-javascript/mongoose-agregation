// eslint-disable-next-line new-cap
const router = require('express').Router();
const Score = require('../models/score');



router
  .get('/classScoreByType', (req, res, next) => {
    Score.classScoreByType()
      .then(scores => res.json(scores))
      .catch(next);
  });

module.exports = router;