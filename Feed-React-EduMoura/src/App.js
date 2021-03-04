import React from 'react';
import './App.css';
import BarraMenu from './Projetos/BarraMenu.js';
import Head from './Projetos/Head.js';
import Feed from './Projetos/Feed.js';


function App(){
  return(
    <header> 
    <Head/>
    <BarraMenu/> 
    <Feed/>
    <Feed/>
    </header>
    
  );
}

export default App;
