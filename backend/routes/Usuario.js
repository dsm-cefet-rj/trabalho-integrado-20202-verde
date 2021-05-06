var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Usuario = require('../models/usuario');
var authenticate = require('../authenticate');

router.use(bodyParser.json());



router.route('/')
.get(async (req, res, next) => {

   /*
            #swagger.tags = ['Usuário']
            #swagger.description = 'Endpoint para encontrar os usuários.'
            #swagger.parameters['usuarios'] = {
                in: 'body',
                type: "object",
                description: "Array de objetos contendo todos os usuários do site",
                schema: {$ref: "#/definitions/Usuarios"}
            } 
        
            #swagger.responses[200] = { 
                schema: { $ref: "#/definitions/Usuarios" },
                description: 'Usuários encontrados.' 
            } 
            #swagger.responses[404] = { 
                description: 'Usuário não encontrado.' 
            },
            #swagger.responses[401] = { 
                description: 'Acesso não autorizado, necessário fazer login' 
            },
            #swagger.responses[500] = { 
                description: 'Server ou banco fora do ar.' 
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
  
})

.post(authenticate.verifyUser,(req, res, next) => {

  /*
            #swagger.tags = ['Usuario']
            #swagger.description = 'Endpoint para criar um novo usuário.'
            #swagger.parameters['usuarios'] = {
                in: 'body',
                type: "object",
                description: "Objeto contendo as informações do usuário a serem registradas",
                schema: {$ref: "#/definitions/Usuario"}
            } 
        
            #swagger.responses[200] = { 
                description: 'Usuário criado.' 
            } 
            #swagger.responses[401] = { 
                description: ' Acesso não autorizado, necessário fazer login' 
            },
            #swagger.responses[500] = { 
                description: 'Server ou banco fora do ar.' 
            } 
        */

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
  .put(authenticate.verifyUser,(req, res, next) => {

    /*
            #swagger.tags = ['Usuario']
            #swagger.description = 'Endpoint para encontrar e atualizar um usuário através do id.'
            #swagger.parameters['id'] = { description: 'ID do usuário' }
            #swagger.parameters['body'] = {
                in: 'body',
                type: "object",
                description: "Objeto contendo as informações do usuário editado",
                schema: {$ref: "#/definitions/Usuario"}
                }
            #swagger.responses[200] = {
                schema: { $ref: "#/definitions/Usuario" },
                description: 'Usuário foi editado.'
                }
            #swagger.responses[401] = {
                description: ' Acesso não autorizado, necessário fazer login'
                },
            #swagger.responses[404] = { 
                description: 'Usuário não encontrado' 
            },
            #swagger.responses[500] = {
                description: 'Server ou banco fora do ar.'
                }
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
  
  })
  .get(authenticate.verifyUser,(req, res, next) => {

     /*
            #swagger.tags = ['usuario']
            #swagger.description = 'Endpoint que encontra um usuário através de seu id.'
            #swagger.parameters['id'] = { description: 'ID do usuário' }
            #swagger.parameters['res'] = {
                in: 'body',
                type: "object",
                description: "Objeto contendo as informações do usuário em questão",
                schema: {$ref: "#/definitions/Usuario"}
            } 
            
            #swagger.responses[200] = { 
                schema: { $ref: "#/definitions/Projeto" },
                description: 'Usuário existe e é encontrado.' 
            } 
            #swagger.responses[401] = { 
                description: ' Acesso não autorizado, necessário fazer login' 
            },
            #swagger.responses[404] = { 
                description: 'Usuário não encontrado' 
            },
            #swagger.responses[500] = { 
                description: 'Server ou banco fora do ar.' 
            } 
        */
    
    Usuario.findById(req.params.id)
      .then((resp) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(resp);
      }, (err) => next(err))
      .catch((err) => next(err));
  
  })
  
  .delete(authenticate.verifyUser,(req, res, next) => {

    /*
            #swagger.tags = ['Usuario']
            #swagger.description = 'Endpoint para encontrar e excluir um usuário através do id.'
            #swagger.parameters['id'] = { description: 'ID do usuário' }
            #swagger.responses[200] = { 
                description: 'Usuário apagado' 
            } 
            #swagger.responses[401] = { 
                description: ' Acesso não autorizado, necessário fazer login' 
            },
            #swagger.responses[404] = { 
                description: 'Usuário não encontrado' 
            },
            #swagger.responses[500] = { 
                description: 'Server ou banco fora do ar.' 
            } 
        */
    
    Usuario.findByIdAndRemove(req.params.id)
      .then((resp) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(resp.id);
      }, (err) => next(err))
      .catch((err) => next(err));
  
  })

module.exports = router;