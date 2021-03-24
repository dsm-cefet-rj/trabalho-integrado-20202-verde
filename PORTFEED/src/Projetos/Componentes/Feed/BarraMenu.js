import React, { useState, useEffect } from 'react';
import './Feed.css';


const tag = ['Todas' ,'Code' , 'Game', 'Tech', 'Design', 'Fotografia','Musica']

export default function BarraMenu(){
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
  
  


    return (
      <div className="borda">
      <div className="barra">
      <button className="button, col-xs-4" onClick={() => alert('Todos')}>
        Todos
      </button>
      <button className="button, col-xs-4" onClick={() => alert('Favoritos')}>
        Favoritos
      </button>
      <button className="button, col-xs-4 " onClick={onPress}>
        Tags <span> - {tags} </span>
      </button>
      </div>
      </div>
    );
  
}




