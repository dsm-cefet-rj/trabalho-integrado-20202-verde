import React from 'react';
import ReactDOM from 'react-dom';
import './Descricao.css';

//Projeto para o cabeçalho e barra de pesquisa
class Descricao extends React.Component {
   render() {
     return(   
    <p >Descrição do projeto: Vestibulum at eros malesuada, vehicula quam ac, scelerisque leo. Nullam nunc turpis, tincidunt ut tellus id, scelerisque mollis elit. Aliquam sagittis risus magna, at aliquet nunc vestibulum quis. Donec fermentum mi eget cursus accumsan. Suspendisse sollicitudin accumsan mi sit amet sagittis. Mauris id pharetra velit. Aenean non augue sit amet neque congue bibendum. Aliquam varius, nunc a ornare fermentum, ante nisi laoreet ex, a sodales sapien metus ut quam. Vivamus blandit, libero et blandit rhoncus, mi neque tempor nulla, in lacinia nisi lacus at neque. Nulla mattis velit eget mollis pulvinar. Nulla lacinia turpis et tincidunt ornare. Vestibulum non laoreet felis. Donec porta, sem vel blandit maximus, mi ante posuere tellus, ut faucibus nulla urna in tellus. Mauris ornare sit amet libero quis iaculis. </p>
   );
  }
}
ReactDOM.render(
  <Descricao />,
  document.getElementById('root')
);

export default Descricao;