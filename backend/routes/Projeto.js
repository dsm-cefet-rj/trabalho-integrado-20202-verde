
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

let Projeto =  [
  {
    "nome": "aaaaaaaaaaaaaaaa",
    "desc": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "info": "aaaaaaaaaaaaaaaaaaaaaaaaa",
    "id": 0
  },
  {
    "nome": "222222222222222222",
    "desc": "222222222222222222222222222222222222222",
    "info": "222222222222222222222222222222222222",
    "id": 1
  }
]

router.route('/')
.get((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(Projeto);
})
.post((req, res, next) => {

  let proxId = 1 + Projeto.map(p => p.id).reduce((x, y) => Math.max(x,y));
  let projetos = {...req.body, id: proxId};
  Projeto.push(projetos);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(projetos);
})

router.route('/:id')
.put((req, res, next) => {
  let index = req.params.id;
  Projeto.splice(index, 1, req.body);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.body);
})
.delete((req, res, next) => {
  
  Projeto = Projeto.filter(function(value, index, arr){ 
    return value.id != req.params.id;
  });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.params.id);
})

module.exports = router;
