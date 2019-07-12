const express = require('express');
const router = express.Router();
const apiData = require('./httpApi')

// JSON.parse('<%- JSON.stringify(content)%>');   html页面解析 json

router.get('/', apiData.homeData);

router.get('/passport', function(req, res, next) {
  res.render('passport/index');
});

module.exports = router