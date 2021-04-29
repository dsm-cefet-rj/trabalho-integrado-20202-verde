var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Usuario = require('../models/usuario');
const cors = require('./cors');

router.use(bodyParser.json());



router.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200);})
.get(cors.corsWithOptions, async (req, res, next) => {

  try{
    const usuariobd = await Usuario.find({});
    console.log({usuariobd});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(usuariobd);
  }catch(err){
    err = {};
    res.statusCode = 404;
    res.json(err);
  }
  
})

.post(cors.corsWithOptions, (req, res, next) => {

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
  .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200);})
  .put(cors.corsWithOptions, (req, res, next) => {
    
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
  .get(cors.corsWithOptions, (req, res, next) => {
    
    Usuario.findById(req.params.id)
      .then((resp) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(resp);
      }, (err) => next(err))
      .catch((err) => next(err));
  
  })
  
  .delete(cors.corsWithOptions, (req, res, next) => {
    
    Usuario.findByIdAndRemove(req.params.id)
      .then((resp) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(resp.id);
      }, (err) => next(err))
      .catch((err) => next(err));
  
  })

module.exports = router;