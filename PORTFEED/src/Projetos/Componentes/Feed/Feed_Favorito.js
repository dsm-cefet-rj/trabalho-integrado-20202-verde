import React, {useEffect} from 'react';
import {useParams} from "react-router-dom"
import {useSelector, connect, useDispatch} from 'react-redux';
import {fetchProjetos, selectAllProjetos, selectProjetosById} from '../AddProjeto/SliceProjeto.js'
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
  

  let FeedFav;
  if(status === 'loaded' || status === 'saved' || status === 'deleted'){
    FeedFav = <RenderPost projetos={projetos}/>;
  }else if(status === 'loading'){
    FeedFav = <div>Carregando Feed...</div>;
  }else if(status === 'failed'){
    FeedFav = <div>Error: {error}</div>;
  }

 
          return(
            <div className = "container" id="projetos">
               <div className = "container" id="projetos">
               {FeedFav}
               </div>
            </div>
          );
      
  }
  
  function Proj (props){  

    return(
        <div className="li">
        <div className="caixa" >
        <div className="col-xs-4">
         <p> {props.port.nome} </p>
         </div>
        <Link to = {`/Projeto/${props.port.id}`}>
         <img className="img-responsive" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmwcSOL0Y2LvXIqo3YQEgK4MmGJYtVokRtw&usqp=CAU"  alt= "P2"  onClick = {() =>document.documentElement.scrollTop = 0}/>  
         </Link>
          <div className="col-xs-6">
            <button className="button" onClick={() => props.post.favorito = !props.post.favorito}> 
              Favoritar
            </button>
          </div>
          </div>
          </div>
    )

  }
function RenderPost(props){    
    props.projetos.reverse();
    var favorito = props.projetos.filter((projetos) => projetos.favorito === true);
    return(
      <div className = "container" id="projetos">
        {favorito.map((port) => <Proj key={port.id} port={port}/>)}
        </div>
      
    )

}

export default connect(state => ({ projetos : state }))(Feed);