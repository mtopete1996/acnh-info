const express = require('express');
const router = express.Router();
var cors = require('cors')
const fishService = require('../services/fishService')

/* GET home page. */
router.get('/', cors(), function(req, res, next) {
  fishService.getAllFish().then(datx => {
    res.render('index', { data: datx });
  })
  .catch(err => {
    console.log(err)
  })
});

module.exports = router;
