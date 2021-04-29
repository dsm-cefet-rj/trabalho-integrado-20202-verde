import React from 'react';
import './App.css';
import Head from './Projetos/Componentes/Head.js';
import BarraMenu from './Projetos/Componentes/Feed/BarraMenu.js'
import FeedFav from './Projetos/Componentes/Feed/Feed_Favorito.js'
import {Provider} from "react-redux";
import store from './Projetos/Componentes/store/GuardaProjeto.js'




function Feed() {
  return(
    <header>
    <Provider store = {store}> 
    <Head/> 
    <BarraMenu/>
    <FeedFav/>
    </Provider>
    </header>
      
  );
}

export default Feed;