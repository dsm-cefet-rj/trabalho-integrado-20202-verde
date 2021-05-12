import React, {useEffect} from 'react';
import {useParams} from "react-router-dom"
import {useSelector, connect, useDispatch} from 'react-redux';
import {fetchPostagem, selectAllPostagem, deletePostagemServer} from '../AddPostagem/SlicePostagem.js'
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


function Feed_Postagem (props) {

  const postagem = useSelector(selectAllPostagem)
  const status = useSelector(state => state.postagem.status);
  const error = useSelector(state => state.postagem.error);  
  const dispatch = useDispatch()

  
  

  useEffect(() => {
    fetch("/users")
    if (status === 'not_loaded') {
      dispatch(fetchPostagem())
    } else if (status === 'failed') {
      setTimeout(() => dispatch(fetchPostagem()), 5000);
    }
  }, [status, dispatch])
  

  let FeedPostagem;
  let checkUser = '';
  if(status === 'loaded' || status === 'saved' || status === 'deleted'){
    FeedPostagem = <RenderPost postagem={postagem}/>;
    checkUser = <CheckUser/>;
  }else if(status === 'loading'){
    FeedPostagem = <div>Carregando Post...</div>;
  }else if(status === 'not_loaded'){
    FeedPostagem = '';
  }else if(status === 'failed'){
    FeedPostagem = <div>Error: {error}</div>;
  }

 
          return(
            <div className = "container" id="postagem">
               <div className = "container" id="postagem">
               {checkUser}
               {FeedPostagem}
               </div>
            </div>
          );
  }
  
  function Post (props){  
    const dispatch = useDispatch()
    let check2;
    check2 = <CheckUser2 props = {props.post}/>
    return(
        <div className="li">
        <div className="post">
        <h1>Nome do Usuario</h1>
        <div className="caixa">
        <p> {props.post.post} </p>
        </div>
        <div className="barra">
        {check2}
        </div>
        </div>
        </div>
    )

  }
function RenderPost(props){    
    props.postagem.reverse();
    return(
      <div className = "container" id="projetos">
        {props.postagem.map((post) => <Post key={post.id} post={post}/>)}
        </div>
      
    )

}

function CheckUser() {
  if (store.getState().logins.user){
    return (
      <Link to = "/NovoPost">
              <input type="submit" value="CRIAR POST" name = 'salva' onClick = {() =>document.documentElement.scrollTop = 0}/>
        </Link> 
    )
  }
  else{
    return (<div>  </div>)
  }
}

function CheckUser2(props) {
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState(null);
  const dispatch = useDispatch();


  function handleClickExcluirPostagem(ident) {
    dispatch(deletePostagemServer(ident));
  }
  if (store.getState().logins.user == props.props.usuario){
    return (
      <div>
      <div className="col-xs-6">
          <Link to={`/EditaPost/${props.props.id}`}>
          <button className="button" onClick={() => document.documentElement.scrollTop = 0}>
           Editar 
          </button>
          </Link>
        </div>
        <div className="col-xs-6"> 
          <button className="button" onClick={() => handleClickExcluirPostagem(props.props.id)}>
           Delete
          </button> 
        </div>
        </div>
    )
  }
  else{
    return (<div>  </div>)
  }
}


export default connect(state => ({ postagem : state }))(Feed_Postagem);