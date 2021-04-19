import React from 'react';
import './App.css';
import Head from './Projetos/Componentes/Head.js';
import InserirPerfil from './Projetos/Componentes/AddPerfil/InserirPerfil.js';
import {Provider} from "react-redux";
import store from './Projetos/Componentes/store/GuardaPerfil.js'


function EditarPerfil() {
  return (
    
     
    <header> 
    <Head/>
    <Provider store = {store}>
    <InserirPerfil/>
    </Provider>
    </header>
      
  );
}

export default EditarPerfil;