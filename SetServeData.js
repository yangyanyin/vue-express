var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var ejs = require('ejs');
var router = require('./Router')

// view engine setup

// 模板引擎
app.engine('html', ejs.__express);
app.set('view engine', 'html');

// 模板引擎指向
app.set('views', './build')

// 静态资源指向
app.use(express.static('build'))

// 启动成功提示 
var time = new Date()
console.info('启动成功:', time)
console.info('location:', 'location:5000')

// 路由输入
app.use(router)

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
});

module.exports = app;
