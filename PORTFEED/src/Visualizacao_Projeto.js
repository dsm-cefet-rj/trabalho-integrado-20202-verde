import React from 'react';
import './App.css';
import Head from './Projetos/Componentes/Head.js';
import Titulo from './Projetos/Componentes/Visualizacao/Titulo.js';
import Descricao from './Projetos/Componentes/Descricao.js';
import Baixo from './Projetos/Componentes/Visualizacao/Baixo.js';
import Images from './Projetos/Componentes/Visualizacao/Images.js';

const InfoProjeto = {
        Nome: 'Usuario',
        Descricao: 'Descrição do projeto Em latim:  Vestibulum at eros malesuada, vehicula quam ac, scelerisque leo. Nullam nunc turpis, tincidunt ut tellus id, scelerisque mollis elit. Aliquam sagittis risus magna, at aliquet nunc vestibulum quis. Donec fermentum mi eget cursus accumsan. Suspendisse sollicitudin accumsan mi sit amet sagittis. Mauris id pharetra velit. Aenean non augue sit amet neque congue bibendum. Aliquam varius, nunc a ornare fermentum, ante nisi laoreet ex, a sodales sapien metus ut quam. Vivamus blandit, libero et blandit rhoncus, mi neque tempor nulla, in lacinia nisi lacus at neque. Nulla mattis velit eget mollis pulvinar. Nulla lacinia turpis et tincidunt ornare. Vestibulum non laoreet felis. Donec porta, sem vel blandit maximus, mi ante posuere tellus, ut faucibus nulla urna in tellus. Mauris ornare sit amet libero quis iaculis.',
        Info: 'Feito em 09/03/2021, Utilizando HTML na plataforma Repl.it. Projeto da Faculdade'
    };


function Visualizacao_Projeto() {
  return (
    <header> 
    <Head/>
    <Titulo tittle = 'Projeto de Teste' InfoProjeto = {InfoProjeto}/>
    <Descricao descricao = {InfoProjeto.Descricao}/>
    <Images/>
    <Baixo InfoProjeto = {InfoProjeto}/>
    </header>
    
  );
}

export default Visualizacao_Projeto;