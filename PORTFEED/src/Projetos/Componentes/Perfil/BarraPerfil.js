import React, { useState, useEffect } from 'react';
import '/home/runner/PORTFEED/src/App.css';

//Projeto para a barra de guia da tela de perfil

const Projeto = ['Todos' ,'Programação' , 'Música', 'Jogos', 'Design', 'Fotografia']

export default function BarraPerfil(){
    const [position, setPosition] = useState(0);
    const [Projetos, setProjeto] = useState('');

    const onPress = () => {    
    const pos = position + 1 === Projeto.length 
      ? 0 
      : position + 1;
    setPosition(pos);
    }

    useEffect(() => {
    setProjeto(Projeto[position]);
   }, [position]);
  
  


    return (
      <div className="borda">
      <div className="barra">
      <button className="button, col-xs-4" onClick={() => alert('Sobre Mim')}>
        Sobre Mim
      </button>
      <button className="button, col-xs-4" onClick={() => alert('Favoritos')}>
        Favoritos
      </button>
      <button className="button, col-xs-4 " onClick={onPress}>
        Projetos <span> - {Projetos} </span>
      </button>
      </div>
      </div>
    );
  
}
/*class BarraPerfil extends React.Component {
  
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

export default BarraPerfil;*/
