var createError = require('http-errors');
var express = require('express');
var mongoose = require("mongoose");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const User = require("./models/user");

// this is our MongoDB database
const dbRoute = "mongodb://localhost:27017/mydb";

// connects our back end code with the database
mongoose.connect(
    dbRoute,
    { useNewUrlParser: true }
);

var db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// test adding user not from API
var new_user = new User();
new_user.userId = 0;
new_user.name = 'Alexander';
new_user.age = 18;
new_user.save(err => {
    if (err) console.log("error on write to database");
    console.log("write to db success");
});
// Test find user not from API
User.find((err, data) => {
    if (err) console.log("error on req to database");
    console.log("req to db success" + data);
});

module.exports = app;

