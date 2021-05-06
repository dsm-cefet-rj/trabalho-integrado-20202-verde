import React, {useEffect, useState} from 'react';
import { Link , useParams} from "react-router-dom"
import {useSelector, connect, useDispatch } from 'react-redux';
import { selectAllusuario,fetchUsuario,selectusuarioById, deleteusuarioServer} from '../AddPerfil/SlicePerfil.js'
import store from '../store/GuardaProjeto';

function Usuario(props){

  const usuarios = useSelector(selectAllusuario)

  const status = useSelector(state => state.usuario.status);
  const error = useSelector(state => state.usuario.error);

  
  let { id } = useParams();
  
  const usuarioFound = useSelector(state => selectusuarioById(state, id));
  console.log(usuarioFound);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'not_loaded' ) {
        dispatch(fetchUsuario())
    }else if(status === 'failed'){
        setTimeout(()=>dispatch(fetchUsuario()), 5000);
    }
  }, [status, dispatch])
  
  
  
  let UsuarioInfo = '';
  let checkUser = '';
  if(status === 'loaded' || status === 'saved' || status === 'deleted'){
    UsuarioInfo = <User usuario={usuarioFound}/>;
    checkUser = <CheckUser usuario={usuarioFound}/>;
  }else if(status === 'loading'){
    UsuarioInfo = <div>Carregando Informações Extras...</div>;
  }else if(status === 'failed'){
    UsuarioInfo = <div>Error: {error}</div>;
  }


     return( <>
          {UsuarioInfo}
          {checkUser}
   </>
   );
}

function User (props) 
{
  return(
    <aside>
     
      <div className = "container">
         <div className="col-xs-6">
           <img class="img2" src="https://image.flaticon.com/icons/png/512/10/10938.png" alt="img" height="200px" width="200px" />
         </div>
        <div id="textousuario">
          <div class = "col-xs-6">
            <h1> 
            {props.usuario.nome}</h1>
           <div><h3>Bio:{props.usuario.bio}</h3></div>
           <div><h3> 
                Áreas de Atuação:{props.usuario.areaAt}</h3></div>
           </div>
         </div>
         <br />
       </div>
       
  </aside>
  )
}

function CheckUser(props) {
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState(null);

  const dispatch = useDispatch();

  if (store.getState().logins.user == props.usuario.usuario){
    return (
      <div>
       <Link to ={`/Altera/${props.usuario.id}`}>
          <input type="submit" value="editar" name = 'Editar' onClick = {() =>document.documentElement.scrollTop = 0} />
          </Link>
      </div>
    )
  }
  else{
    return (<div>  </div>)
  }
}

export default connect(state => ({ nome : state }))(Usuario);