import React from 'react';
import {
  Link
} from "react-router-dom"
import { connect } from 'react-redux';

const Titulo = ({projetos}) => (
<aside>
  {projetos.map(descricao => 
    (
         <div class= "container">
      <div class = "row" >
        <div class = "col-xs-12">
      <h1 > {descricao.projeto} 
      <small >ㅤ Feito por :ㅤ  
              <Link to ="/User"> 
             Usuário</Link>
      </small>
      </h1>
        </div>
        </div>
        </div>
    )
    )
    }
</aside>
);

export default connect(state => ({ projetos : state }))(Titulo);