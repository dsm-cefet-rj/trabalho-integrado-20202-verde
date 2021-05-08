var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Projetos = require('../models/projetos');
var authenticate = require('../authenticate');

router.use(bodyParser.json());



router.route('/')
.options((req, res) => { res.sendStatus(200);})
.get(async (req, res, next) => {

    /*
            #swagger.tags = ['Projeto']
            #swagger.description = 'Endpoint para encontrar os projetos.' 
    */
          
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
    /*  #swagger.responses[200] = { 
                schema: { $ref: "#/definitions/Projetos" },
                description: 'Projeto encontrado.' 
            } 
            #swagger.responses[404] = { 
                description: 'Projeto não encontrado.' 
            },
            #swagger.responses[401] = { 
                description: 'Acesso não autorizado, necessário fazer login' 
            },
            #swagger.responses[500] = { 
                description: 'Server ou banco fora do ar.' 
            } 
    */
  
})

.post(authenticate.verifyUser,(req, res, next) => {

    /*
            #swagger.tags = ['Projetos']
            #swagger.description = 'Endpoint para criar um novo projeto.'
    */
  Projetos.create(req.body)
  .then((projetobd) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(projetobd);
  }, (err) => next(err))
  .catch((err) => next(err));

    /*
            #swagger.responses[200] = { 
                description: 'Projeto criado.' 
            } 
            #swagger.responses[401] = { 
                description: ' Acesso não autorizado, necessário fazer login' 
            },
            #swagger.responses[500] = { 
                description: 'Server ou banco fora do ar.' 
            } 
        */

})


router.route('/:id')
.get((req, res, next) => {

    /*
            #swagger.tags = ['Projetos']
            #swagger.description = 'Endpoint que encontra um projeto através de seu id.'
            #swagger.parameters['id'] = { description: 'ID do projeto.' }
    */           
            

  
  Projetos.findById(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
/*
    #swagger.responses[200] = { 
        schema: { $ref: "#/definitions/Projeto" },
        description: 'Projeto existe e é encontrado.' 
    } 
    #swagger.responses[401] = { 
        description: ' Acesso não autorizado, necessário fazer login' 
    },
    #swagger.responses[404] = { 
        description: 'Projeto não encontrado' 
    },
    #swagger.responses[500] = { 
        description: 'Server ou banco fora do ar.' 
    } 
*/
})
.put(authenticate.verifyUser,(req, res, next) => {

  /*
            #swagger.tags = ['Projeto']
            #swagger.description = 'Endpoint para encontrar e atualizar um projeto através do id.'
            #swagger.parameters['id'] = { description: 'ID do projeto.' }
    */
  
  Projetos.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true })
  .then((projeto) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(projeto);
  }, (err) => next(err))
  .catch((err) => next(err));

  /*
            #swagger.responses[200] = {
                schema: { $ref: "#/definitions/Projeto" },
                description: 'Projeto foi editado.'
                }
            #swagger.responses[401] = {
                description: ' Acesso não autorizado, necessário fazer login'
                },
            #swagger.responses[404] = { 
                description: 'Projeto não encontrado' 
            },
            #swagger.responses[500] = {
                description: 'Server ou banco fora do ar.'
                }
    */
})
.delete(authenticate.verifyUser,(req, res, next) => {

  /*
            #swagger.tags = ['Projeto']
            #swagger.description = 'Endpoint para encontrar e excluir um projeto através do id.'
            #swagger.parameters['id'] = { description: 'ID do projeto' }
    */

  Projetos.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(req.params.id);
    }, (err) => next(err))
    .catch((err) => next(err));
    
    /*#swagger.responses[200] = { 
                description: 'Projeto apagado' 
            } 
            #swagger.responses[401] = { 
                description: ' Acesso não autorizado, necessário fazer login' 
            },
            #swagger.responses[404] = { 
                description: 'Projeto não encontrado' 
            },
            #swagger.responses[500] = { 
                description: 'Server ou banco fora do ar.' 
            } 
        */

})




module.exports = router;
