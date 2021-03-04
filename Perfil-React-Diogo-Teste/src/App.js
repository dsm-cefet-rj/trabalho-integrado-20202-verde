import React from 'react';
import './App.css';
import BarraPerfil from './Projetos/BarraPerfil.js';
import Head from './Projetos/Head.js';
import Usuario from './Projetos/Usuario.js';
import Perfil from './Projetos/Perfil.js';


function App(){
  return(
    <header> 
    <Head/>
    <Usuario/> 
    <BarraPerfil/>
    <Perfil/>
    </header>
    
    
    
   
  
  );
}

export default App;