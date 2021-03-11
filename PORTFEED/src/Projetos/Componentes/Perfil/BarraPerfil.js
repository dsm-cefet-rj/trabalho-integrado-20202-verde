import React from 'react';
import ReactDOM from 'react-dom';

//Projeto para a barra de guia da tela de feed 
class BarraPerfil extends React.Component {
  
  render() {
    return (
      <div className="barra">
      <button className="button, col-xs-4" onClick={() => alert('Programa&ccedil;&atilde;o')}>
        Programação
      </button>
      <button className="button, col-xs-4" onClick={() => alert('M&uacute;sica')}>
        Música
      </button>
      <button className="button, col-xs-4" onClick={() => alert('Jogos')}>
        Jogos
      </button>
      <button className="button, col-xs-4" onClick={() => alert('Fotografia')}>
        Fotografia
      </button>
      <button className="button, col-xs-4" onClick={() => alert('Design')}>
        Design
      </button>
      <button className="button, col-xs-4" onClick={() => alert('Sobre Mim')}>
        Sobre Mim
      </button>
      </div>
    );
  }
}


ReactDOM.render(
  <BarraPerfil />,
  document.getElementById('root')
);

export default BarraPerfil;
