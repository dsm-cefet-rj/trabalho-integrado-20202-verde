import React from 'react';
import './App.css';
import Head from './Projetos/Componentes/Head.js';
import InserirPostagem from './Projetos/Componentes/AddPostagem/InserirPostagem.js';
import {Provider} from "react-redux";
import store from './Projetos/Componentes/store/GuardaPostagem.js'

function EditarPostagem() {
    return (
      
      <header> 
      <Head/>
      <Provider store = {store}>
      <InserirPostagem/>
      </Provider>
      </header>
        
    );
  }
  
  export default EditarPostagem;