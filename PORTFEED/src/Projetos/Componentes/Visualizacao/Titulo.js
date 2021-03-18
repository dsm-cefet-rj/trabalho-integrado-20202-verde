import React from 'react';
import {
  Link
} from "react-router-dom"
import { connect } from 'react-redux';

const Titulo = ({desc}) => (
<aside>
  {desc.map(descricao => 
    (
         <div class= "container">
      <div class = "row" >
        <div class = "col-xs-12">
      <h1 > {descricao.projeto} 
      <small >ㅤFeito por :ㅤ
              <Link to ="/User"> 
             {descricao.nome}</Link>
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

export default connect(state => ({ desc : state }))(Titulo);