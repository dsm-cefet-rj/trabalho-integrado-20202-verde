import React from 'react';
import './App.css';
import Head from './Projetos/Componentes/Head.js';
import Titulo from './Projetos/Componentes/Titulo.js';
import Descricao from './Projetos/Componentes/Descricao.js';
import Info from './Projetos/Componentes/Info.js';
import Images from './Projetos/Componentes/Images.js';
import TAG from './Projetos/Componentes/TAG.js';
import Curtir from './Projetos/Componentes/Curtir.js';

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
