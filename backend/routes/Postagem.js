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

        /*
            #swagger.tags = ['Postagem']
            #swagger.description = 'Endpoint para encontrar as postagens.'
            #swagger.parameters['obj'] = {
                in: 'body',
                type: "object",
                description: "Array de objetos contendo todos as postagens",
                schema: {$ref: "#/definitions/Postagem"}
            } 
        */

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
    /* 
            #swagger.responses[200] = { 
                schema: { $ref: "#/definitions/Postagem" },
                description: 'Post encontrado.' 
            } 
            #swagger.responses[500] = { 
                description: 'Server ou banco fora do ar.' 
            } 
        
    */ 
  
})

.post(authenticate.verifyUser,(req, res, next) => {

        /*
            #swagger.tags = ['Postagem']
            #swagger.description = 'Endpoint para criar uma nova postagem.'
            #swagger.parameters['obj'] = {
                in: 'body',
                type: "object",
                description: "",
                schema: {$ref: "#/definitions/Postagem"}
            } 
        */

  Postagem.create(req.body)
  .then((postbd) => {
      console.log('Postagem criada ', postbd);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(postbd);
      
  }, (err) => next(err))
  .catch((err) => next(err));
        /* 
            #swagger.responses[200] = { 
                description: 'Postagem criada.' 
            } 
            #swagger.responses[404] = { 
                description: 'Post não encontrado.' 
            },
            #swagger.responses[500] = { 
                description: 'Server ou banco fora do ar.' 
            } 
        */
})

router.route('/:id')
.put(authenticate.verifyUser,(req, res, next) => {
    /*      #swagger.tags = ['Postagem']
            #swagger.description = 'Endpoint para encontrar e atualizar uma postagem através do id.'
            #swagger.parameters['id'] = { description: 'ID da postagem.' }
    */
  
            Postagem.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true })
  .then((post) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(post);
  }, (err) => next(err))
  .catch((err) => next(err));

    /*
            #swagger.responses[200] = {
                schema: { $ref: "#/definitions/Postagem" },
                description: 'Postagem foi editada.'
                }
            #swagger.responses[404] = { 
                description: 'Post não encontrado.' 
            },
            #swagger.responses[500] = {
                description: 'Server ou banco fora do ar.'
                }
    */
})
.get(authenticate.verifyUser,(req, res, next) => {
  /*
        #swagger.tags = ['Postagem']
        #swagger.description = 'Endpoint que encontra uma postagem através de seu id.'
        #swagger.parameters['id'] = { description: 'ID da postagem.' }
  */
  Postagem.findById(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
    
    /*
            #swagger.responses[200] = { 
                schema: { $ref: "#/definitions/Postagem" },
                description: 'Postagem existe e é encontrada.' 
            } 
             #swagger.responses[404] = { 
                description: 'Post não encontrado.' 
            },
            #swagger.responses[500] = { 
                description: 'Server ou banco fora do ar.' 
            } 
    */
})

.delete(authenticate.verifyUser,(req, res, next) => {
  /*
            #swagger.tags = ['Postagem']
            #swagger.description = 'Endpoint para encontrar e excluir uma postagem através do id.'
            #swagger.parameters['id'] = { description: 'ID da postagem' }
  */
  Postagem.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(req.params.id);
    }, (err) => next(err))
    .catch((err) => next(err));
    /*
            #swagger.responses[200] = { 
                description: 'Postagem apagada' 
            } 
             #swagger.responses[404] = { 
                description: 'Post não encontrado.' 
            },
            #swagger.responses[500] = { 
                description: 'Server ou banco fora do ar.' 
            } 
    */
})

module.exports = router;
