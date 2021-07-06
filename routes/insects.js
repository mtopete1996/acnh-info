const express = require('express');
const router = express.Router();
const fishService = require('../services/insectsService')

router.get('/', function(req, res, next) {
  res.render('insects/index', { data: 'Insectos' });
});

module.exports = router;
