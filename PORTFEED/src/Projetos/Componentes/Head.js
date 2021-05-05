import React from 'react';
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux';
import store from './store/GuardaProjeto';

//Projeto para o cabeçalho e barra de pesquisa
function Head (){

  function CheckUser() {
    const [loading, setLoading] = React.useState(true);
    const [users, setUsers] = React.useState(null);
  
    const dispatch = useDispatch();
    console.log(store.getState().logins.user);

    if (store.getState().logins.user != null){
      return (
        <div className = "col-xs-2">
            
                <label> Ola {store.getState().logins.user} </label>
            </div>
      )
    }
    else{
      return (<div className = "col-xs-2">
      <Link to ="/Registrar"> 
          <label> Signup </label></Link> <label> ou </label> <Link to ="/Logar"> 
          <label> Login </label></Link> 
      </div>)
    }
  }

     return(   
    <div className= "page-header">
      <form className="form-horizontal">
        <div className="container">
          <div className = "form-group row" >
              
              <Link to ="/Feed"> 
              <label className = "col-xs-6 header"> PORT-FEED</label></Link>
              
              <div className = "col-xs-4">
              <input type="text" className="form-control " placeholder="Pesquisa"/>
          </div>
          {CheckUser()}

          </div>
        </div>
      </form>
    </div>
   )
}



export default Head;