import React from 'react';
import './App.css';
import Head from './Projetos/Head.js';
import Titulo from './Projetos/Titulo.js';
import Descricao from './Projetos/Descricao.js';
import Info from './Projetos/Info.js';
import Images from './Projetos/Images.js';
import TAG from './Projetos/TAG.js';
import Curtir from './Projetos/Curtir.js';

function App() {
  return (
    <header> 
    <Head/>
    <Titulo/>
    <Descricao/>
    <Images/>
    <Info/>
    <TAG/>
    <Curtir/>
    </header>
    
  );
}

export default App;
