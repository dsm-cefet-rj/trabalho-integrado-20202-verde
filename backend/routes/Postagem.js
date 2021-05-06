var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Postagem = require('../models/postagem');
const cors = require('./cors');
var authenticate = require('../authenticate');

router.use(bodyParser.json());



router.route('/')
.options((req, res) => { res.sendStatus(200);})
.get( async (req, res, next) => {

  try{
    const postbd = await Postagem.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(postbd);
  }catch(err){
    err = {};
    res.statusCode = 404;
    res.json(err);
  }
  
})

.post(authenticate.verifyUser,(req, res, next) => {

  Postagem.create(req.body)
  .then((postbd) => {
      console.log('Projeto criado ', postbd);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(postbd);
  }, (err) => next(err))
  .catch((err) => next(err));
})

router.route('/:id')
.put(authenticate.verifyUser,(req, res, next) => {
  
  Postagem.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true })
  .then((post) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(post);
  }, (err) => next(err))
  .catch((err) => next(err));

})
.get(authenticate.verifyUser,(req, res, next) => {
  
  Postagem.findById(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));

})

.delete(authenticate.verifyUser,(req, res, next) => {
  
  Postagem.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(req.params.id);
    }, (err) => next(err))
    .catch((err) => next(err));

})

module.exports = router;
