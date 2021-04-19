import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Visualizacao_Projeto from './Visualizacao_Projeto.js';
import Feed from './Feed';
import Perfil from './Perfil';
import EditarProjeto from './EditarProjeto.js';
import EditarPerfil from './EditarPerfil.js';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"

      //Colocar aqui o feed ou o perfil para testar a tela de vocês
ReactDOM.render(
  <Router>
    <Route exact = {true} path ="/">
        <Feed/>
      </Route>
      <Route path ="/Projeto/:id">
        <Visualizacao_Projeto/>
      </Route>
      <Route path ="/Edita/:id">
        <EditarProjeto/>
      </Route>
      <Route path ="/User">
        <Perfil/>
      </Route>
      <Route path ="/Novo">
        <EditarProjeto/>
      </Route>
      <Route path ="/Altera/:id">
        <EditarPerfil/>
      </Route>
      <Route path ="/Feed">
        <Feed/>
      </Route>
    </Router>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
