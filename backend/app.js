var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

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


const app = express();
const app = require('express')()
const http = require('http')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
/*
http.createServer(app).listen(3000)
console.log("Listening at:// port:%s (HTTP)", 3000)

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

*/
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