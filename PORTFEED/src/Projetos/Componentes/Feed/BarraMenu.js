import React from 'react';
import ReactDOM from 'react-dom';
import '/home/runner/PORTFEED/src/App.css';

const categories = ['World', 'Business', 'Tech', 'Sport'];




//Projeto para a barra de guia da tela de feed 
class BarraMenu extends React.Component {
    
handleClickTags(){
  alert(categories);
}

  render() {
    return (
      <div className="barra">
      <button className="button, col-xs-4" onClick={() => alert('Novo')}>
        Novo
      </button>
      <button className="button, col-xs-4" onClick={() => alert('Seguindo')}>
        Seguindo
      </button>
      <button className="button, col-xs-4 " data-toggle="dropdown"  onClick={() => this.handleClickTags()}>
        Tags <span class="caret"></span></button>
      
      </div>
    );
  }
}


ReactDOM.render(
  <BarraMenu />,
  document.getElementById('root')
);

export default BarraMenu;
