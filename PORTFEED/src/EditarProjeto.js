import React from 'react';
import './App.css';
import Head from './Projetos/Componentes/Head.js';
import InserirProjeto from './Projetos/Componentes/AddProjeto/InserirProjeto.js';
import {Provider} from "react-redux";
import store from './Projetos/Componentes/store/GuardaProjeto.js'


function EditarProjeto() {
  return (
    
     
    <header> 
    <Head/>
    <Provider store = {store}>
    <InserirProjeto/>
    </Provider>
    </header>
      
  );
}

export default EditarProjeto;