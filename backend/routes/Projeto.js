
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

let Projeto =  [
  {
    "nome": "Projeto",
    "desc": "Descrição do projeto Em latim:  Vestibulum at eros malesuada, vehicula quam ac, scelerisque leo. Nullam nunc turpis, tincidunt ut tellus id, scelerisque mollis elit. Aliquam sagittis risus magna, at aliquet nunc vestibulum quis. Donec fermentum mi eget cursus accumsan. Suspendisse sollicitudin accumsan mi sit amet sagittis. Mauris id pharetra velit. Aenean non augue sit amet neque congue bibendum. Aliquam varius, nunc a ornare fermentum, ante nisi laoreet ex, a sodales sapien metus ut quam. Vivamus blandit, libero et blandit rhoncus, mi neque tempor nulla, in lacinia nisi lacus at neque. Nulla mattis velit eget mollis pulvinar. Nulla lacinia turpis et tincidunt ornare. Vestibulum non laoreet felis. Donec porta, sem vel blandit maximus, mi ante posuere tellus, ut faucibus nulla urna in tellus. Mauris ornare sit amet libero quis iaculis.",
    "info": "Feito em 09/03/2021, Utilizando HTML na plataforma Repl.it. Projeto da Faculdade",
    "id": 0
  },
  {
    "nome": "Projeto 2",
    "desc": "Projeto 2 o retorno texto de teste para descrição",
    "info": "Projeto 2 info",
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
