import React from 'react';
import './App.css';
import Head from './Projetos/Componentes/Head.js';
import UserForm from './Projetos/Componentes/Users/UserForm.js';
import {Provider} from "react-redux";
import store from './Projetos/Componentes/store/GuardaProjeto.js'


function EditarProjeto() {
  return (
    
     
    <header> 
    <Provider store = {store}>
    <Head/>
    <UserForm/>
    </Provider>
    </header>
      
  );
}

export default EditarProjeto;