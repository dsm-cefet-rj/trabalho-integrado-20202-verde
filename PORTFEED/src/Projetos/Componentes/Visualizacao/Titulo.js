import React, {useEffect} from 'react';
import { Link, useParams } from "react-router-dom"
import {useSelector, useDispatch } from 'react-redux';
import {fetchProjetos, selectAllProjetos, selectProjetosById} from '../AddProjeto/SliceProjeto.js'

export default function Titulo(props){

const projetos = useSelector(selectAllProjetos)

const status = useSelector(state => state.projetos.status);
const error = useSelector(state => state.projetos.error);

  
const dispatch = useDispatch();

let { id } = useParams();
  id = parseInt(id);

  const projetoFound = useSelector(state => selectProjetosById(state, id))

useEffect(() => {
  if (status === 'not_loaded' || status === 'saved') {
      dispatch(fetchProjetos())
  }else if(status === 'failed'){
      setTimeout(()=>dispatch(fetchProjetos()), 5000);
  }
}, [status, dispatch])


let visuProjeto = '';
if(status === 'loaded' || status === 'saved' || status === 'deleted'){
  visuProjeto = <Texto projetos={projetoFound}/>;
}else if(status === 'loading'){
  visuProjeto = <div>Carregando Titulo...</div>;
}else if(status === 'failed'){
  visuProjeto = <div>Error: {error}</div>;
}


  return (<>
            {visuProjeto}
    </>
  )

  
}
export function Texto(props){

  
  let { id } = useParams();
  
  
    return(
      <aside>
      
        <div class= "container">
      <div class = "row" >
       <div class = "col-xs-12">
      <h1 > {props.projetos.nome} 
      
      <small >ㅤ Feito por :ㅤ  
             <Link to ="/User"> 
            Usuário</Link>
      </small>
      </h1>
       </div>
       </div>
       </div>
       
      </aside>
      );
}
