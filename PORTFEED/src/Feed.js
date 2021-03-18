import React from 'react';
import './App.css';
import Head from './Projetos/Componentes/Head.js';
import BarraMenu from './Projetos/Componentes/Feed/BarraMenu.js'
import FeedP from './Projetos/Componentes/Feed/Feed_Principal.js'
import {Provider} from "react-redux";
import store from '/home/runner/PORTFEED/src/Projetos/Componentes/store/Guarda'




function Feed() {
  return(
    <header>
    <Provider store = {store}> 
    <Head/> 
    <BarraMenu/>
    <FeedP/>
    </Provider>
    </header>
      
  );
}

export default Feed;