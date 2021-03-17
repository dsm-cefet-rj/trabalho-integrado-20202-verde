import React from 'react';
import ReactDOM from 'react-dom';
import './Feed.css';
import {
    Link
  } from "react-router-dom"
  

class Feed extends React.Component {
  render(){
  return(
  <div className = "container">
    <div className="lin">
      <div className="caixa"> 
      <Link to ="/Projeto">
          <img className="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE06Fw0zibZpXLGO5l32DOC_TSHbdHDc1sFA&usqp=CAU" alt="P1" />
          </Link>
      </div>
      <div className="caixa">
      <Link to ="/Projeto">
          <img className="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE06Fw0zibZpXLGO5l32DOC_TSHbdHDc1sFA&usqp=CAU " alt="P2"/>  
          </Link>
      </div>
    </div>
   </div>
    );
  }
}


export default Feed;