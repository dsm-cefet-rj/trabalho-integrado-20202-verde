import React from 'react';
import {
  Link
} from "react-router-dom"

function Titulo(props) {
    return (
         <div class= "container">
      <div class = "row" >
        <div class = "col-xs-12">
      <h1 > {props.tittle} 
      <small >ㅤFeito por :ㅤ
              <Link to ="/User"> 
             {props.InfoProjeto.Nome}</Link>
      </small>
      </h1>
        </div>
        </div>
        </div>
    )
}

export default Titulo;