import React from 'react';
import './App.css';
import Head from './Projetos/Componentes/Head.js';
import Usuario from './Projetos/Componentes/Perfil/Usuario.js';
import Projetos from './Projetos/Componentes/Perfil/Projetos.js';
import BarraPerfil from './Projetos/Componentes/Perfil/BarraPerfil.js';
import {Provider} from "react-redux";
import store from '/home/runner/PORTFEED/src/Projetos/Componentes/store/Guarda'

function Perfil() {
  return (
    <header> 
    <Head/>
    <Provider store = {store}>
    <Usuario/>
    <BarraPerfil/>
    <Projetos/>
    </Provider>
    </header>
    
  );
}

export default Perfil;