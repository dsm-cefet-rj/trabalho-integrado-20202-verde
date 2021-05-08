var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
var User = require('../models/users');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var authenticate = require('../authenticate');

const Usuario = require('../models/users');
var nome;

router.use(bodyParser.json());

router.route('/')
.get(async (req, res, next) => {

  try{
    const userbd = await Usuario.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({name : nome});
  }catch(err){
    err = {};
    res.statusCode = 404;
    res.json(err);
  }
  
})

router.post('/signup', (req, res, next) => {

      /*#swagger.tags = ['Users']
        #swagger.description = 'Registra usuário'
      */
    User.register(new User({username: req.body.username}), req.body.password, 
    (err, user) => {
        if(err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({err: err});
          
        } else {
            passport.authenticate('local')(req, res, () => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: true, status: 'Registration Successful!'});
            });
        }
        /* #swagger.responses[200] = { 
            schema: { $ref: "#/definitions/SignUp" },
            description: 'Registrado com sucesso.' 
        }
        #swagger.responses[500] = { 
            schema: { $ref: "#/definitions/SignUpErro" },
            description: 'O usuário já está cadastrado.' 
        }
    */
    });
});
  
  router.post('/login', passport.authenticate('local'), (req, res) => {
    
    /* 	#swagger.tags = ['Users']
        #swagger.description = 'Loga usuário' 
        #swagger.parameters['obj'] = {
            in: 'body',
            type: "object",
            schema: {$ref: "#/definitions/Login"}
        }
    */

    var token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    nome = req.user.username
    res.json({id: req.user._id, token: token, status: 'You are successfully logged in!', name : req.user.username});
    
    /* #swagger.responses[200] = { 
            schema: { $ref: "#/definitions/LoginResposta" },
            description: 'Logado com sucesso.' 
        }
        #swagger.responses[401] = { 
            description: 'Erro na autenticação.' 
        } 
    */
  
  });
  
  router.get('/logout', (req, res, next) => {

    /* 	#swagger.tags = ['Users']
        #swagger.description = 'Desloga usuário'
        #swagger.parameters['obj'] = {
            in: 'body',
            type: "object",
            schema: {$ref: "#/definitions/Logout"} 
        }
    */
    if (req.session) {
      req.session.destroy();
      res.clearCookie('session-id');
      res.redirect('/');
    }
    else {
      var err = new Error('You are not logged in!');
      err.status = 403;
      next(err);
    }
    /*  #swagger.responses[200] = {
            description: 'Deslogado com sucesso.' 
        }
    */
  });

  
module.exports = router;