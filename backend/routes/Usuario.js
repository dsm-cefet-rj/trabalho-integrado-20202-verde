var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Usuario = require('../models/usuario');

router.use(bodyParser.json());



router.route('/')
.get(async (req, res, next) => {

  try{
    const usuariobd = await Usuario.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(usuariobd);
  }catch(err){
    err = {};
    res.statusCode = 404;
    res.json(err);
  }
  
})

.post((req, res, next) => {

    Usuario.create(req.body)
    .then((usuariobd) => {
        console.log('Projeto criado ', usuariobd);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(usuariobd);
    }, (err) => next(err))
    .catch((err) => next(err));
  })
  
  router.route('/:id')
  .put((req, res, next) => {
    
    Usuario.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, { new: true })
    .then((usuario) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(usuario);
    }, (err) => next(err))
    .catch((err) => next(err));
  
  })
  .get((req, res, next) => {
    
    Usuario.findById(req.params.id)
      .then((resp) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(resp);
      }, (err) => next(err))
      .catch((err) => next(err));
  
  })
  
  .delete((req, res, next) => {
    
    Usuario.findByIdAndRemove(req.params.id)
      .then((resp) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(resp.id);
      }, (err) => next(err))
      .catch((err) => next(err));
  
  })

module.exports = router;