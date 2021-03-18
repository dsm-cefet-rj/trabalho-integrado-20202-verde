import React, { useState, useEffect } from 'react';
import '/home/runner/PORTFEED/src/Projetos/Componentes/Perfil/BarraPerfil.js';

const Titulo = ['Todos os projetos:' ,'Projetos de programação:' , 'Projetos de música', 'Projetos de jogos', 'Projetos de design', 'Projetos de fotografia']

export default function TituloPerfil(pos){
 const [position, setPosition] = useState(0);
 const [Trabalhos, setProjeto] = useState('');
 const posicao = Titulo.length
     if (posicao!=pos){
     posicao = pos === Titulo.length 
      ? 0 
      : pos;
    setPosition(posicao);
     }
     
     useEffect(() => {
      setProjeto(Titulo[position]);
     }, [position]);
  
  


    return (
      <div className="h1">
      <div><br />
      <span> {Trabalhos} </span>
      </div>
      </div>
    );
}