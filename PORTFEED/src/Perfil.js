import React from 'react';
import './App.css';
import Head from './Projetos/Componentes/Head.js';
import Usuario from './Projetos/Componentes/Perfil/Usuario.js';
import Projetos from './Projetos/Componentes/Perfil/Projetos.js';
import BarraPerfil from './Projetos/Componentes/Perfil/BarraPerfil.js';
function Perfil() {
  return (
    <header> 
    <Head/>
    <Usuario/>
    <BarraPerfil/>
    <Projetos/>
    </header>
    
  );
}

export default Perfil;