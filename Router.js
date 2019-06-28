var express = require('express');
var router = express.Router();

userInfo = {
	name: '秧艳银',
	age: '25',
	sex: '男'
}

router.get('/', function(req, res, next) {
  res.render('home/index', userInfo);
});

router.get('/passport', function(req, res, next) {
  res.render('passport/index');
});


module.exports = router