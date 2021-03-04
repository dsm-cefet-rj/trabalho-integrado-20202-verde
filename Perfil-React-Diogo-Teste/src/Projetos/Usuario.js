import React from 'react';
import ReactDOM from 'react-dom';
import './Usuario.css';

class Usuario extends React.Component {
  render(){
  return(
    <div className = "container">
     <div id="fotousuario">
	     <div className="col-xs-6">
         <img src="https://www.construtoracesconetto.com.br/wp-content/uploads/2020/03/blank-profile-picture-973460_640.png" alt="img" height="200px" width="200px" />
       </div>
     </div>
      <div id="textousuario">
        <div class = "col-xs-6">
          <h1>Nome do Usu&aacute;rio</h1>
         <div><h3>Bio:</h3></div>
         <div><h3>&Aacute;reas de atua&ccedil;&atilde;o: Programa&ccedil;&atilde;o,<br /> Jogos, M&uacute;sica,<br /> Fotografia, Design</h3></div>
         </div>
       </div>
       <hr />
     </div>
   );
   }
  
}
ReactDOM.render(
  <Usuario />,
  document.getElementById('root')
);

export default Usuario;