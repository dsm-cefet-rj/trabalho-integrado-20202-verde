import React, {useEffect, useState} from 'react';
import { Link , useParams} from "react-router-dom"
import {useSelector, connect, useDispatch } from 'react-redux';
import {fetchProjetos, selectAllProjetos} from '../AddProjeto/SliceProjeto.js'
//Projeto para o cabeçalho e barra de pesquisa
function Baixo(props){

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
  
  
  
  let infoProjeto = '';
  if(status === 'loaded' || status === 'saved' || status === 'deleted'){
    infoProjeto = <InfoProjeto projetos={projetos}/>;
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
  let { id } = useParams();
    id = parseInt(id);

  const [curt,setCurt] = useState(()=> {return 0})

  function Curte()
  {
    setCurt(priCurt =>  priCurt + 1)
  }
  function edita()
{
     document.documentElement.scrollTop = 0
}
  return(
  <div>
     
  <div>
<div class = "col-xs-12">
<p class = "texto text-justify">Mais Informações: {props.projetos[id].info}</p>
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
<Link to ={`/Edita/${props.projetos[id].id}`}>
<input type="submit" value="Editar" name = 'salva' Onclick = {() =>edita()} />
 
 </Link>
  </div>
</div>
</div>
  )
}


export default  connect(state => ({ projetos : state }))(Baixo);