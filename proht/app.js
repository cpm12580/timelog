//createError  logger  打印日志
var createError = require('http-errors');
//引入express搭建服务器
var express = require('express');
//处理路径的
var path = require('path');
//cookie解析
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//express-session:用于储存用户信息的
var session=require('express-session')
//引入 路由模块
var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
//搭建服务器
var app = express();

app.use(session({//在路由里面使用req.session进行赋值或者获取数据
	name:'fcht',
	secret:'fcht',
	cookie:{
		maxAge:800000000
	},
	resave:false,
	saveUninitialized:false
}))



// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(logger('dev'));
//用于 post解析前端传过来的参数
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//配置静态资源托管
app.use(express.static(path.join(__dirname, 'public')));

//加载路由
app.use('/api', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//next(createError(404));
//});

// error handler
//app.use(function(err, req, res, next) {
//// set locals, only providing error in development
//res.locals.message = err.message;
//res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//// render the error page
//res.status(err.status || 500);
//res.render('error');
//});

module.exports = app;
