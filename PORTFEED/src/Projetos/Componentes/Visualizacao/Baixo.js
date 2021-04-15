import React, {useEffect, useState} from 'react';
import { Link , useParams} from "react-router-dom"
import {useSelector, connect, useDispatch } from 'react-redux';
import {fetchProjetos, selectAllProjetos,selectProjetosById, deleteProjetoServer} from '../AddProjeto/SliceProjeto.js'
//Projeto para o cabeçalho e barra de pesquisa
function Baixo(props){

  const projetos = useSelector(selectAllProjetos)

  const status = useSelector(state => state.projetos.status);
  const error = useSelector(state => state.projetos.error);
  
    
  const dispatch = useDispatch();

  let { id } = useParams();

      
    const projetoFound = useSelector(state => selectProjetosById(state, id))

  useEffect(() => {
    if (status === 'not_loaded' ) {
        dispatch(fetchProjetos())
    }else if(status === 'failed'){
        setTimeout(()=>dispatch(fetchProjetos()), 5000);
    }
  }, [status, dispatch])
  
  
  
  let infoProjeto = '';
  if(status === 'loaded' || status === 'saved' || status === 'deleted'){
    infoProjeto = <InfoProjeto projetos={projetoFound}/>;
  }else if(status === 'loading'){
    infoProjeto = <div>Carregando Informações Extras...</div>;
  }else if(status === 'failed'){
    infoProjeto = <div>Error: {error}</div>;
  }


     return( <>
          {infoProjeto}
   </>
   );
}

function InfoProjeto (props) 
{

  const [curt,setCurt] = useState(()=> {return 0})

  function Curte()
  {
    setCurt(priCurt =>  priCurt + 1)
  }
  function edita()
{
     document.documentElement.scrollTop = 0
}

const dispatch = useDispatch();
function handleClickExcluirProjeto(ident){
  dispatch(deleteProjetoServer(ident));
}

  return(
  <div>
     
  <div>
<div class = "col-xs-12">
<p class = "texto text-justify">Mais Informações: {props.projetos.info}</p>
</div>

<div>
<p>TAGs : <mark>PROGRAMAÇÃO</mark>  <mark>PROJETOS</mark>  <mark>HTML</mark> <mark>CSS</mark> <mark>FACULDADE</mark> <mark>REACT</mark></p>
</div>

<div class = "linha">
  <input class = "botao" type="image" id = "curtida" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_LER1e7ghQtxhmNIAutyoeykmLvl_JPbqA&usqp=CAU" name="submit" width="60" height="60"  alt="submit" onClick={Curte}/>

<p class = "col-xs-3"> Curtidas:</p> 

<p class = "col-xs-6" id = "num">{curt}</p> 
</div>
<div class = "col-xs-6">
<Link to ={`/Edita/${props.projetos.id}`}>
<input type="submit" value="Editar" name = 'salva' onClick = {() =>edita()} />
 
 </Link>
  </div>
  <div class = "col-xs-6">
  <Link to ='/Feed'>
<input type="submit" value="Remover" name = 'deleta' onClick = {() => handleClickExcluirProjeto(props.projetos.id)} />
</Link>
  </div>
</div>
</div>
  )
}


export default  connect(state => ({ projetos : state }))(Baixo);