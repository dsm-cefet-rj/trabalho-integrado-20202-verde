import React from 'react';
import ReactDOM from 'react-dom';
import './Titulo.css';

//Projeto para o cabeçalho e barra de pesquisa
class Titulo extends React.Component {
   render() {
     return(   
    <div class= "container">
      <div class = "row" >
        <div class = "col-xs-12">
      <h1 >Nome do Projeto <small >Feito por: 
      <a href= "https://Perfil-React-Diogo-Teste.diogoconde.repl.co" target="_blank" rel ="noopener noreferrer" > Usuario</a></small></h1>
        </div>
        </div>
        </div>
   );
  }
}
ReactDOM.render(
  <Titulo />,
  document.getElementById('root')
);

export default Titulo;