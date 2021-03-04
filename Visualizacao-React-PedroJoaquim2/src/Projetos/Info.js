import React from 'react';
import ReactDOM from 'react-dom';
import './Descricao.css';

//Projeto para o cabeçalho e barra de pesquisa
class Info extends React.Component {
   render() {
     return(   
    <div>
    <p class = "texto">Mais Informações: Feito em 17/02/2021, Utilizando HTML na plataforma Repl.it. Projeto da Faculdade</p>
    </div>
   );
  }
}
ReactDOM.render(
  <Info />,
  document.getElementById('root')
);

export default Info;