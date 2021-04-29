import React from 'react';
import './App.css';
import Head from './Projetos/Componentes/Head.js';
import AddProjeto from './Projetos/Componentes/AddProjeto/AddProjeto.js';
import {Provider} from "react-redux";
import store from './Projetos/Componentes/store/GuardaProjeto.js'


function AdicionaProjeto() {
  return (
    <header>
    <Provider store = {store}> 
    <Head/>
    <AddProjeto/>
    </Provider>
    </header>
      
  );
}

export default AdicionaProjeto;