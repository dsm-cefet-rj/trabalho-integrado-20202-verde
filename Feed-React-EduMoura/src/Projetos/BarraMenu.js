import React from 'react';
import ReactDOM from 'react-dom';
import './BarraMenu.css';

//Projeto para a barra de guia da tela de feed 
class BarraMenu extends React.Component {
  
  render() {
    return (
      <div className="barra">
      <button className="button, col-xs-4" onClick={() => alert('Novo')}>
        Novo
      </button>
      <button className="button, col-xs-4" onClick={() => alert('Seguindo')}>
        Seguindo
      </button>
      <button className="button, col-xs-4" onClick={() => alert('Tags')}>
        Tags
      </button>
      </div>
    );
  }
}


ReactDOM.render(
  <BarraMenu />,
  document.getElementById('root')
);

export default BarraMenu;

