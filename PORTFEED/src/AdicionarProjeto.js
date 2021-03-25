import React from 'react';
import './App.css';
import Head from './Projetos/Componentes/Head.js';
import AddProjeto from './Projetos/Componentes/AddProjeto/AddProjeto.js';
import {Provider} from "react-redux";
import store from './Projetos/Componentes/store/GuardaProjeto.js'


function AdicionaProjeto() {
  return (
    <header> 
    <Head/>
    <Provider store = {store}>
    <AddProjeto/>
    </Provider>
    </header>
      
  );
}

export default AdicionaProjeto;