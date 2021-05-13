import React, {useEffect} from 'react';
import { useParams} from "react-router-dom"
import {useSelector, useDispatch } from 'react-redux';
import {fetchProjetos, selectAllProjetos, selectProjetosById} from '../AddProjeto/SliceProjeto.js'

function Images (props)
{ 
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
  
  
  
  let descProjeto = '';
  if(status === 'loaded' || status === 'saved' || status === 'deleted'){
    descProjeto = <Desc projetos={projetoFound}/>;
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

  return(
  <aside>
  
  <div >
            <img class ="img-responsive"    src={props.projetos.img} alt="Imagem"></img>
    </div>
</aside>
);
  }
export default (Images);
/*
class Images extends React.Component {
   render() {
     return(   
    <div class = "col-xs-12">
    <div class="linha ">
          <div class="coluna">
            <img class ="img-responsive"    src="https://incuca.net/wp-content/uploads/2018/05/gestao-de-projetos.jpg" alt="Imagem"></img>
          </div>
          <div class="coluna">
            <img  class="img-responsive"    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB43iQpS2XkQP7kKp_Mlw38Ctdz8Apqo52ag&usqp=CAU" alt="Imagem"></img>
          </div>  
        </div>
        
        <div class="linha">
          <div class="coluna">
            <img  class="img-responsive"  src="https://blog.aevo.com.br/wp-content/uploads/2017/05/aprenda-como-construir-do-zero-um-modelo-de-projeto-eficiente.jpeg" alt="Imagem"></img>
          </div>
          <div class="coluna">
            <img  class="img-responsive"    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6AvFUX-UP-EeLrHeZxq49hwN1FSQMkfu95w&usqp=CAU" alt="Imagem"></img>
          </div>  
        </div>
        </div>
   );
  }
}
ReactDOM.render(
  <Images />,
  document.getElementById('root')
);

export default Images;*/