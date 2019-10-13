// eslint-disable-next-line new-cap
const router = require('express').Router();
const Student = require('../models/student');



router
  .get('/gradesByType', (req, res, next) => {
    Student.gradesByType()
      .then(students => res.json(students))
      .catch(next);
  });

module.exports = router;