import React from 'react';
import './App.css';
import Head from './Projetos/Componentes/Head.js';
import BarraMenu from './Projetos/Componentes/Feed/BarraMenu.js'
import FeedP from './Projetos/Componentes/Feed/Feed_Principal.js'


function Feed() {
  return (
    <header> 
    <Head/>
    <BarraMenu/> 
    <FeedP/>
    </header>
    
  );
}

export default Feed;