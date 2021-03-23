import {createStore} from "redux";
import { configureStore } from '@reduxjs/toolkit'
import slice from '/home/runner/PORTFEED/src/Projetos/Componentes/AddProjeto/SliceProjeto.js'



function reducer()
{
  return [
    {
      projeto : [{ nome:'Usuário teste',
      projeto:'Projeto Redux',
      desc:'Descrição do projeto Em latim:  Vestibulum at eros malesuada, vehicula quam ac, scelerisque leo. Nullam nunc turpis, tincidunt ut tellus id, scelerisque mollis elit. Aliquam sagittis risus magna, at aliquet nunc vestibulum quis. Donec fermentum mi eget cursus accumsan. Suspendisse sollicitudin accumsan mi sit amet sagittis. Mauris id pharetra velit. Aenean non augue sit amet neque congue bibendum. Aliquam varius, nunc a ornare fermentum, ante nisi laoreet ex, a sodales sapien metus ut quam. Vivamus blandit, libero et blandit rhoncus, mi neque tempor nulla, in lacinia nisi lacus at neque. Nulla mattis velit eget mollis pulvinar. Nulla lacinia turpis et tincidunt ornare. Vestibulum non laoreet felis. Donec porta, sem vel blandit maximus, mi ante posuere tellus, ut faucibus nulla urna in tellus. Mauris ornare sit amet libero quis iaculis.',}],
     
      areaAt: ' Jogos, Design, Fotografia',
      bio: ' Estudante universitário',
      post:'teste',
      id:'1'
    }
  ];
}
const store = createStore(slice);
export default store;