import React from 'react';
import { connect } from 'react-redux';

const Usuario = ({nome}) => (
  <aside>
   {nome.map(guarda => (
    <div className = "container">
	     <div className="col-xs-6">
         <img class="img2" src="https://www.construtoracesconetto.com.br/wp-content/uploads/2020/03/blank-profile-picture-973460_640.png" alt="img" height="200px" width="200px" />
       </div>
      <div id="textousuario">
        <div class = "col-xs-6">
          <h1> 
             {guarda.nome}</h1>
         <div><h3>Bio:{guarda.bio}</h3></div>
         <div><h3> 
              Áreas de Atuação:{guarda.areaAt}</h3></div>
         </div>
       </div>
       <br />
     </div>
   ))
  }
</aside>
);

export default connect(state => ({ nome : state }))(Usuario);