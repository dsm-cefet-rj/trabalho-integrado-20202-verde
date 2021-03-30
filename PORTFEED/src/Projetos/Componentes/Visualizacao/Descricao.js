import React, {useEffect} from 'react';
import { useParams} from "react-router-dom"
import {useSelector, useDispatch } from 'react-redux';
import {fetchProjetos, selectAllProjetos} from '../AddProjeto/SliceProjeto.js'

function Descricao (props)
{ 
  
 

  const projetos = useSelector(selectAllProjetos)

  const status = useSelector(state => state.projetos.status);
  const error = useSelector(state => state.projetos.error);
  
    
  const dispatch = useDispatch();
  


  useEffect(() => {
    if (status === 'not_loaded' ) {
        dispatch(fetchProjetos())
    }else if(status === 'failed'){
        setTimeout(()=>dispatch(fetchProjetos()), 5000);
    }
  }, [status, dispatch])
  
  
  
  let descProjeto = '';
  if(status === 'loaded' || status === 'saved' || status === 'deleted'){
    descProjeto = <Desc projetos={projetos}/>;
  }else if(status === 'loading'){
    descProjeto = <div>Carregando Descrição...</div>;
  }else if(status === 'failed'){
    descProjeto = <div>Error: {error}</div>;
  }
  
    return (<>
              {descProjeto}
      </>
    )
  
    
  }

  function Desc (props) 
  {
  let { id } = useParams();
  id = parseInt(id);

  return(
  <aside>
  
    <p class = "col-xs-12 text-justify"> {props.projetos[id].desc}</p>
</aside>
);
  }
export default (Descricao);