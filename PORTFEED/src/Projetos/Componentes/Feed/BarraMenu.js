import React, { useState, useEffect } from 'react';
import './Feed.css';
import {
  Link
} from "react-router-dom"


export default function BarraMenu(){
   
    return (
      <div className="borda">
      <div className="barra">
      <Link to = "/FeedPost">
      <button className="button, col-xs-4">
        Posts
      </button>
      </Link>
      <Link to = "/Feed"> 
      <button className="button, col-xs-4">
        Projetos
      </button>
      </Link> 
      <Link to = "/FeedFav">
      <button className="button, col-xs-4 ">
        Favoritos
      </button>
      </Link> 
      </div>
      </div>
    );
  
}




