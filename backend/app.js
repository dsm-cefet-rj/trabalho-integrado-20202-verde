var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');

var authenticate = require('./authenticate');

var indexRouter = require('./routes/index');
var projetosRouter = require('./routes/Projeto');
var postagemRouter = require('./routes/Postagem');
var usersRouter = require('./routes/user');
var User = require('./models/users');

var config = require('./config');

const mongoose = require('mongoose');
const { start } = require('repl');

const url =  config.mongoUrl;
const connect = mongoose.connect(url);

connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(passport.initialize());
app.use(passport.session());

app.use('/users', usersRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/projetos', projetosRouter);
app.use('/postagem', postagemRouter);

module.exports = app;