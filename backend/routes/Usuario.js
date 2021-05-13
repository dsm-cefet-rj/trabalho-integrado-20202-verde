var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Usuario = require('../models/usuario');
var authenticate = require('../authenticate');

router.use(bodyParser.json());



router.route('/')
.get(async (req, res, next) => {

        /*
            #swagger.tags = ['Usuario']
            #swagger.description = 'Endpoint para encontrar os usuários.'
            #swagger.parameters['obj'] = {
                in: 'body',
                type: "object",
                description: "Array de objetos contendo todos os usuarios",
                schema: {$ref: "#/definitions/Usuario"}
            } 
        */

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
 
    /* 
    #swagger.responses[200] = { 
        schema: { $ref: "#/definitions/Usuario" },
        description: 'Usuários encontrados.' 
    } 
    #swagger.responses[500] = { 
        description: 'Server ou banco fora do ar.' 
    } 
    */
  
})

.post(authenticate.verifyUser,(req, res, next) => {

        /*
            #swagger.tags = ['Usuario']
            #swagger.description = 'Endpoint para criar um novo usuário.' 
            #swagger.parameters['obj'] = {
                in: 'body',
                type: "object",
                description: "",
                schema: {$ref: "#/definitions/Usuario"}
            } 
        */

    Usuario.create(req.body)
    .then((usuariobd) => {
        console.log('Usuario criado ', usuariobd);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(usuariobd);
    }, (err) => next(err))
    .catch((err) => next(err));
        /*
            #swagger.responses[200] = { 
                description: 'Usuário criado.' 
            } 
            #swagger.responses[500] = { 
                description: 'Server ou banco fora do ar.' 
            } 
        */

  })
  
  router.route('/:id')
  .put(authenticate.verifyUser,(req, res, next) => {

    /*
            #swagger.tags = ['Usuario']
            #swagger.description = 'Endpoint para encontrar e atualizar um usuário através do id.'
            #swagger.parameters['id'] = { description: 'ID do usuário' }
    
    */
    
    Usuario.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, { new: true })
    .then((usuario) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(usuario);
    }, (err) => next(err))
    .catch((err) => next(err));

        /*
            #swagger.responses[200] = {
                schema: { $ref: "#/definitions/Usuario" },
                description: 'Usuário foi editado.'
                }
            #swagger.responses[404] = { 
                description: 'Usuário não encontrado' 
            },
            #swagger.responses[500] = {
                description: 'Server ou banco fora do ar.'
                }
        */
  })
  .get(authenticate.verifyUser,(req, res, next) => {

        /*
            #swagger.tags = ['Usuario']
            #swagger.description = 'Endpoint que encontra um usuário através de seu id.'
            #swagger.parameters['id'] = { description: 'ID do usuário' }
            
        */    
    Usuario.findById(req.params.id)
      .then((resp) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(resp);
      }, (err) => next(err))
      .catch((err) => next(err));
      
        /*    
            #swagger.responses[200] = { 
                schema: { $ref: "#/definitions/Usuario" },
                description: 'Usuário existe e é encontrado.' 
            } 
            #swagger.responses[404] = { 
                description: 'Usuário não encontrado' 
            },
            #swagger.responses[500] = { 
                description: 'Server ou banco fora do ar.' 
            } 
        */

  })
  
  .delete(authenticate.verifyUser,(req, res, next) => {

    /*
            #swagger.tags = ['Usuario']
            #swagger.description = 'Endpoint para encontrar e excluir um usuário através do id.'
            #swagger.parameters['id'] = { description: 'ID do usuário' }
     
    */
    
    Usuario.findByIdAndRemove(req.params.id)
      .then((resp) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(resp.id);
      }, (err) => next(err))
      .catch((err) => next(err));
        
        /*    
            #swagger.responses[200] = { 
                description: 'Usuário apagado.' 
            } 
            #swagger.responses[404] = { 
                description: 'Usuário não encontrado' 
            },
            #swagger.responses[500] = { 
                description: 'Server ou banco fora do ar.' 
            } 
        */
  })

module.exports = router;