const express = require('express');
const router = express.Router();
const fishService = require('../services/fishService')

router.get('/', function(req, res, next) {
  fishService.fishTableObject().then(datx => {
    res.render('fishes/index', { data: datx });
  })
  .catch(err => {
    console.log(err)
    res.render('error', { message: 'ERROR 500', error: { code: 500, stack: err }})
  })
});

module.exports = router;
