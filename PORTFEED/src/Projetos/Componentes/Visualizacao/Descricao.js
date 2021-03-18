import React from 'react';
import { connect } from 'react-redux';

const Descricao = ({desc}) => (
  <aside>
  {desc.map(descricao => 
    (<p>{descricao.desc}</p>)
  )
        
  }
</aside>
);

export default connect(state => ({ desc : state }))(Descricao);