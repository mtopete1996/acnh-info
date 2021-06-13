const express = require('express');
const router = express.Router();
const fishService = require('../services/fishService')

/* GET home page. */
router.get('/', function(req, res, next) {
  fishService.getAllFish().then(datx => {
    console.log(datx);
    res.render('index', { data: datx });
  })
  .catch(err => {
    console.log(err)
  })
});

module.exports = router;
