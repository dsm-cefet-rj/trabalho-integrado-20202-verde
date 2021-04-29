import React, {useEffect} from 'react';
import {useParams} from "react-router-dom"
import {useSelector, connect, useDispatch} from 'react-redux';
import {fetchPostagem, selectAllPostagem, deletePostagemServer} from '../AddPostagem/SlicePostagem.js'
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


function Feed_Postagem (props) {

  const postagem = useSelector(selectAllPostagem)
  const status = useSelector(state => state.postagem.status);
  const error = useSelector(state => state.postagem.error);  
  const dispatch = useDispatch()
  

  useEffect(() => {
      if (status === 'not_loaded' || status === 'saved' || status === 'deleted') {
          dispatch(fetchPostagem())
      } 
  }, [status, dispatch])
  

  let FeedPostagem;
  if(status === 'loaded' || status === 'saved' || status === 'deleted'){
    FeedPostagem = <RenderPost postagem={postagem}/>;
  }else if(status === 'loading'){
    FeedPostagem = <div>Carregando Feed...</div>;
  }else if(status === 'failed'){
    FeedPostagem = <div>Error: {error}</div>;
  }

 
          return(
            <div className = "container" id="postagem">
               <div className = "container" id="postagem">
              <Link to = "/NovoPost">
              <input type="submit" value="CRIAR POST" name = 'salva' onClick = {() =>document.documentElement.scrollTop = 0}/>
              </Link> 

               {FeedPostagem}
               </div>
            </div>
          );
  }
  
  function Post (props){  
    const dispatch = useDispatch()
    function handleClickExcluirPostagem(ident) {
      dispatch(deletePostagemServer(ident));
    }
    return(
        <div className="li">

        <div className="post">
        <h1>Nome do Usuario</h1>
        <div className="caixa">
        <p> {props.post.post} </p>
        </div>
        <div className="barra">
        <div className="col-xs-6">
          <Link to={`/EditaPost/${props.post.id}`}>
          <button className="button" onClick={() => document.documentElement.scrollTop = 0}>
           Editar 
          </button>
          </Link>
        </div>
        <div className="col-xs-6"> 
          <button className="button" onClick={() => handleClickExcluirPostagem(props.post.id)}>
           Delete
          </button> 
        </div>
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
/*
function CheckUser() {
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!users){
    fetch("http://localhost:3004/users").then(x =>
      x.json().then(y => {
        setUsers(y.name);
        setLoading(false);
      })
    );
  }
  
  }, [users,dispatch]);

  if (loading) {
    return (<div> Carregando... </div>)
  }
  
  if (users){
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
*/

export default connect(state => ({ postagem : state }))(Feed_Postagem);