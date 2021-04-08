import React, {useEffect} from 'react';
import {useParams} from "react-router-dom"
import {useSelector, connect, useDispatch} from 'react-redux';
import {fetchProjetos, selectAllProjetos} from '../AddProjeto/SliceProjeto.js'
import './Feed.css';

/*
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
*/

import {
  Link
} from "react-router-dom"


function Feed (props) {

  const projetos = useSelector(selectAllProjetos)
  const status = useSelector(state => state.projetos.status);
  const error = useSelector(state => state.projetos.error);  
  const dispatch = useDispatch()

  useEffect(() => {
      if (status === 'not_loaded' || status === 'saved' || status === 'deleted') {
          dispatch(fetchProjetos())
      } 
  }, [status, dispatch])
  

  let Feed = '';
  if(status === 'loaded' || status === 'saved' || status === 'deleted'){
    Feed = <RenderPost projetos={projetos}/>;
  }else if(status === 'loading'){
    Feed = <div>Carregando Feed...</div>;
  }else if(status === 'failed'){
    Feed = <div>Error: {error}</div>;
  }

 
          return(
            <div className = "container" id="projetos">
               <div className = "container" id="projetos">
               <Link to = "/Novo">
                <input type="submit" value="CRIAR NOVO" name = 'salva' />
                </Link> 
               {Feed}
               </div>
            </div>
          );
      
  
  }
  
  function Post (props){
    
    return(
      <div className="li">
        <div className="caixa" >
        <Link to = {`/Projeto/${props.post.id}`}>
         <img className="img-responsive" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmwcSOL0Y2LvXIqo3YQEgK4MmGJYtVokRtw&usqp=CAU "  alt= "P2"/>  
         <p> {props.post.nome} </p>
         </Link>
          </div>
          </div>
    )

  }
function RenderPost(props){    
  
    
    return(
      <div className = "container" id="projetos">
        {props.projetos.map((post) => <Post key={post.id} post={post}/>)}
        </div>
      
    )

}

export default connect(state => ({ projetos : state }))(Feed);