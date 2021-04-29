import React from 'react';
import './App.css';
import Head from './Projetos/Componentes/Head.js';
import BarraMenu from './Projetos/Componentes/Feed/BarraMenu.js'
import FeedPostagem from './Projetos/Componentes/Feed/Feed_Postagem.js'
import {Provider} from "react-redux";
import store from './Projetos/Componentes/store/GuardaPostagem.js'




function Feed() {
  return(
    <header>
    <Provider store = {store}> 
    <Head/> 
    <BarraMenu/>
    <FeedPostagem/>
    </Provider>
    </header>
      
  );
}

export default Feed;