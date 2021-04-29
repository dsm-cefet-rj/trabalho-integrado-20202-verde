var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
var User = require('../models/users');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var authenticate = require('../authenticate');

const Usuario = require('../models/users');
var nome;
//ver isso aqui 

router.use(bodyParser.json());
/*
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
*/
router.post('/signup', (req, res, next) => {
    User.register(new User({username: req.body.username}), req.body.password, 
    (err, user) => {
        if(err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({err: err});
            console('um');
        } else {
            passport.authenticate('local')(req, res, () => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: true, status: 'Registration Successful!'});
            });
        }
    });
});
  
  router.post('/login', passport.authenticate('local'), (req, res) => {
    
    var token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    nome = req.user.username
    res.json({success: true, token: token, status: 'You are successfully logged in!', name : req.user.username});
  });
  
  router.get('/logout', (req, res, next) => {
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
  });

  
module.exports = router;