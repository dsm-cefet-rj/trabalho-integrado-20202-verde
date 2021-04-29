import React from 'react';
import './App.css';
import Head from './Projetos/Componentes/Head.js';
import InserirPostagem from './Projetos/Componentes/AddPostagem/InserirPostagem.js';
import {Provider} from "react-redux";
import store from './Projetos/Componentes/store/GuardaProjeto.js'

function EditarPostagem() {
    return (
      
      <header> 
      <Provider store = {store}>
      <Head/>
      <InserirPostagem/>
      </Provider>
      </header>
        
    );
  }
  
  export default EditarPostagem;