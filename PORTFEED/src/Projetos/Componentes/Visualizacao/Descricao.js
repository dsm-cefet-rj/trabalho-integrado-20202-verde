import React from 'react';
import { connect } from 'react-redux';

const Descricao = ({projetos}) => (
  <aside>
  {projetos.map(descricao => 
    (
    <p class = "col-xs-12 text-justify"> {descricao.desc}</p>)
  )
        
  }
</aside>
);

export default connect(state => ({ projetos : state }))(Descricao);