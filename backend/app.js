const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');

var authenticate = require('./authenticate');

var indexRouter = require('./routes/index');
var projetosRouter = require('./routes/Projeto');
var usuarioRouter = require('./routes/Usuario');
var postagemRouter = require('./routes/Postagem');
var usersRouter = require('./routes/users');
var User = require('./models/users');

var config = require('./config');

const mongoose = require('mongoose');
const { start } = require('repl');

const url =  config.mongoUrl;
const connect = mongoose.connect(url);
const app       = express();
const swaggerUi = require('express-swaggerize-ui');

app.use('./swagger_output.json', function (req, res) {
  res.json(require('./swagger_output.json'));
});
app.use('/api-docs', swaggerUi());

app.listen(3000);


connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(passport.initialize());
app.use(passport.session());

app.use('/users', usersRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/projetos', projetosRouter);
app.use('/postagem', postagemRouter);
app.use('/usuario', usuarioRouter);

module.exports = app;