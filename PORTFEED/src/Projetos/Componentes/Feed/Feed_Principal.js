import React, {useEffect} from 'react';
import {useParams} from "react-router-dom"
import {useSelector, connect, useDispatch} from 'react-redux';
import {fetchProjetos, selectAllProjetos, selectProjetosById} from '../AddProjeto/SliceProjeto.js'
import './Feed.css';
import store from '../store/GuardaProjeto';
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
    if (status === 'not_loaded') {
      dispatch(fetchProjetos())
    } else if (status === 'failed') {
      setTimeout(() => dispatch(fetchProjetos()), 5000);
    }
  }, [status, dispatch])
  

  let Feed;
  let checkUser = ' ';
  if(status === 'loaded' || status === 'saved' || status === 'deleted'){
    Feed = <RenderPost projetos={projetos}/>;
    checkUser = <CheckUser />;
  }else if(status === 'loading'){
    Feed = <div>Carregando Feed...</div>;
  }else if(status === 'not_loaded'){
    Feed = '';
  }else if(status === 'failed'){
    Feed = <div>Error: {error}</div>;
  }

 
          return(
            <div className = "container" id="projetos">
               <div className = "container" id="projetos">
               {checkUser}
               {Feed}
               </div>
            </div>
          );
      
  
  }
  
  function Proj (props){  
/*
    function changeValue() {
      console.log(props.port.favorito)
      props.port.favorito = !(props.port.favorito);
      console.log(props.port.favorito)
  }
*/
    return(
      <div className="li">
        <div className="caixa" >
        <div className="titulo">
         <p> {props.port.nome} </p>
         </div>
        <Link to = {`/Projeto/${props.port.id}`}>
         <img className="img-responsive" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmwcSOL0Y2LvXIqo3YQEgK4MmGJYtVokRtw&usqp=CAU"  alt= "P2"  onClick = {() =>document.documentElement.scrollTop = 0}/>  
         </Link>
          <div className="col-xs-6">
            <button className="button" onClick={() => props.port.favorito === !props.port.favorito}> 
              Favoritar
            </button>
          </div>
          </div>
          </div>
    )

  }
function RenderPost(props){    
    var projetos = props.projetos.reverse();
    return(
      <div className = "container" id="projetos">
        {projetos.map((port) => <Proj key={port.id} port={port}/>)}
        </div>
      
    )

}

function CheckUser() {
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState(null);
  const dispatch = useDispatch();

  if (store.getState().logins.user){
    return (
      <Link to = "/Novo">
      <input type="submit" value="CRIAR NOVO" name = 'salva' onClick = {() =>document.documentElement.scrollTop = 0}/>
      </Link> 
    )
  }
  else{
    return (<div>  </div>)
  }
}

export default connect(state => ({ projetos : state }))(Feed);