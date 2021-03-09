import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Visualizacao_Projeto from './Visualizacao_Projeto';
import * as serviceWorker from './serviceWorker';

      //Colocar aqui o feed ou o perfil para testar a tela de vocês
ReactDOM.render(<Visualizacao_Projeto />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
