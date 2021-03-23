import {createStore} from "redux";

function reducer()
{
  return [
    {
      areaAt: ' Jogos, Design, Fotografia',
      bio: ' Estudante universitário',
      post:'teste',
      id:'1'
    }
  ];
}

const store = createStore(reducer);

export default store; 