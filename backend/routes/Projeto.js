
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Projetos = require('../models/projetos');
const cors = require('./cors');

router.use(bodyParser.json());



router.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200);})
.get(cors.corsWithOptions, async (req, res, next) => {

  try{
    const projetobd = await Projetos.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(projetobd);
  }catch(err){
    err = {};
    res.statusCode = 404;
    res.json(err);
  }
  
})

.post(cors.corsWithOptions, (req, res, next) => {

  Projetos.create(req.body)
  .then((projetobd) => {
      console.log('Projeto criado ', projetobd);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(projetobd);
  }, (err) => next(err))
  .catch((err) => next(err));
})

router.route('/:id')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200);})
.put(cors.corsWithOptions, (req, res, next) => {
  
  Projetos.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true })
  .then((projeto) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(projeto);
  }, (err) => next(err))
  .catch((err) => next(err));

})
.get(cors.corsWithOptions, (req, res, next) => {
  
  Projetos.findById(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));

})

.delete(cors.corsWithOptions, (req, res, next) => {
  
  Projetos.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp.id);
    }, (err) => next(err))
    .catch((err) => next(err));

})

module.exports = router;
