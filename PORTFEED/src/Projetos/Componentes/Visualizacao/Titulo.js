import React from 'react';

function Titulo(props) {
    return (
         <div class= "container">
      <div class = "row" >
        <div class = "col-xs-12">
      <h1 > {props.tittle} <small >Feito por: 
      <a href= "https://Perfil-React-Diogo-Teste.diogoconde.repl.co" target="_blank" rel ="noopener noreferrer" > {props.InfoProjeto.Nome}</a></small></h1>
        </div>
        </div>
        </div>
    )
}

export default Titulo;