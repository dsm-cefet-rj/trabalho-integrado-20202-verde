import React, { useState, useEffect } from 'react';
import './Feed.css';
import {
  Link
} from "react-router-dom"


export default function BarraMenu(){

  /*  
  const [position, setPosition] = useState(0);
    const [tags, setTag] = useState('');

    const onPress = () => {    
    const pos = position + 1 === tag.length 
      ? 0 
      : position + 1;
    setPosition(pos);
    }

    useEffect(() => {
    setTag(tag[position]);
   }, [position]);
  
  */

   
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




