import React from 'react';
import ReactDOM from 'react-dom';
import './TAG.css';
import './Descricao.css';


//Projeto para o cabeçalho e barra de pesquisa
class TAG extends React.Component {
   render() {
     return(   
    <div>
    <p>TAGs : <mark>PROGRAMAÇÃO</mark>  <mark>PROJETOS</mark>  <mark>HTML</mark> <mark>CSS</mark> <mark>FACULDADE</mark> <mark>REACT</mark></p>
    </div>
   );
  }
}
ReactDOM.render(
  <TAG />,
  document.getElementById('root')
);

export default TAG;