import React from 'react';
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux';

//Projeto para o cabeçalho e barra de pesquisa
function Head (){

  function CheckUser() {
    const [loading, setLoading] = React.useState(true);
    const [users, setUsers] = React.useState(null);
  
    const dispatch = useDispatch();
  
    React.useEffect(() => {
      if (!users){
      fetch("http://localhost:3004/users").then(x =>
        x.json().then(y => {
          setUsers(y);
          setLoading(false);
        })
      );
    }
    
    }, [users,dispatch]);
  
    if (loading) {
      return (<div> Carregando... </div>)
    }
    if (users.name != null){
      return (
        <div className = "col-xs-2">
            
                <label> Ola {users.name} </label>
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