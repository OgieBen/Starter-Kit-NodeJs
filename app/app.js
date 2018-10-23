const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expSession = require('express-session');

const indexRouter = require('./routes/index');

const app = express();

let sessionConfig = {
  secret: 'session',
  resave: true,
  saveUninitialized: false,
  cookie: {}
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('cookie-parser')('cookie'));
app.use(expSession(sessionConfig));

app.use('/', indexRouter);

if(app.get('env' === 'production')){
  app.set('trust proxy', 1); 
  sessionConfig.cookie.secured = true;
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
