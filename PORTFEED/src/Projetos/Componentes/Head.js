import React from 'react';
import {Link} from "react-router-dom"

//Projeto para o cabeçalho e barra de pesquisa
function Head (){
     return(   
    <div className= "page-header">
      <form className="form-horizontal">
        <div className="container">
          <div className = "form-group row" >
              
              <Link to ="/Feed"> 
              <label className = "col-xs-6 header"> PORT-FEED</label></Link>
              
              <div className = "col-xs-6">
              <input type="text" className="form-control " placeholder="Pesquisa"/>
          </div>
          </div>
        </div>
      </form>
    </div>
   )
}

export default Head;