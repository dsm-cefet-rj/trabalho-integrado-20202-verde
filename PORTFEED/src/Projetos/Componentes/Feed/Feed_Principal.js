import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './Feed.css';
import {
  Link
} from "react-router-dom"


export default function Feed() {
  const [post , setPost] = useState([
  {id: '0', nome:''},
  {id: '1', nome:''},
  ]);

  function Favorito(id){
      const newFav = post.map( post => {
        return post.id === id ? {...post, favorito: !post.favorito} : post
      });
      setPost(newFav);
  }

  return(
  <div className = "container">
      
      {post.map(post =>(
      <div className = "li">
      <div className="caixa">
          {post.nome}
          <Link to = "/Projeto">
          <img className="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmwcSOL0Y2LvXIqo3YQEgK4MmGJYtVokRtw&usqp=CAU " alt="P2"/>  </Link>
          {post.favorito && <span> (Favoritado) </span>}
          <button onCLick ={() => Favorito(post.id)}> Favoritar </button>
          </div>
      </div>
      ))}
    
    
  </div>
  
    );
  
}