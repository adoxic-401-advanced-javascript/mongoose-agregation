// eslint-disable-next-line new-cap
const router = require('express').Router();
const Book = require('../models/book');



router
  .get('/byPages', (req, res, next) => {
    Book.byPages()
      .then(books => res.json(books))
      .catch(next);
  });

module.exports = router;