
import React, {useEffect} from 'react';
import {useSelector, connect, useDispatch } from 'react-redux';
import {fetchProjetos, selectAllProjetos} from '../AddProjeto/SliceProjeto.js'

import './Feed.css';
import {
  Link
} from "react-router-dom"
/*
function Feed(props) {
  
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
  
  
  let ProjFeed = '';
  if(status === 'loaded' || status === 'saved' || status === 'deleted'){
    ProjFeed = <FeedExibit projetos={projetos}/>;
  }else if(status === 'loading'){
    ProjFeed = <div>Carregando Informações Extras...</div>;
  }else if(status === 'failed'){
    ProjFeed = <div>Error: {error}</div>;
  }


     return( <>
          {ProjFeed}
   </>
   );
}

*/

function add()
{
     document.documentElement.scrollTop = 0
}

function Feed(props){
  return(
  
    
    <div className = "container">
      
        <div className = "li">
        <div className="caixa">
            <Link to = "/Projeto">
            <img className="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmwcSOL0Y2LvXIqo3YQEgK4MmGJYtVokRtw&usqp=CAU " alt="P2"/>  
            </Link>
            
            
            
            </div>
        </div>
        <Link to = "/Adiciona">
        <input type="submit" value="CRIAR NOVO" name = 'salva' Onclick = {() =>add()} />
        </Link>
    </div>

  );
}


export default connect(state => ({ projetos : state }))(Feed);