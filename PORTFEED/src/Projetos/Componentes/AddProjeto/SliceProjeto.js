import {createSlice} from '@reduxjs/toolkit'

const salvaProjetos = [{
      id: '1',
      nome:'Usuário teste',
      projeto:'Projeto Redux',
      desc: 'Descrição do projeto Em latim:  Vestibulum at eros malesuada, vehicula quam ac, scelerisque leo. Nullam nunc turpis, tincidunt ut tellus id, scelerisque mollis elit. Aliquam sagittis risus magna, at aliquet nunc vestibulum quis. Donec fermentum mi eget cursus accumsan. Suspendisse sollicitudin accumsan mi sit amet sagittis. Mauris id pharetra velit. Aenean non augue sit amet neque congue bibendum. Aliquam varius, nunc a ornare fermentum, ante nisi laoreet ex, a sodales sapien metus ut quam. Vivamus blandit, libero et blandit rhoncus, mi neque tempor nulla, in lacinia nisi lacus at neque. Nulla mattis velit eget mollis pulvinar. Nulla lacinia turpis et tincidunt ornare. Vestibulum non laoreet felis. Donec porta, sem vel blandit maximus, mi ante posuere tellus, ut faucibus nulla urna in tellus. Mauris ornare sit amet libero quis iaculis.',
      info: 'Feito em 09/03/2021, Utilizando HTML na plataforma Repl.it. Projeto da Faculdade'
      }]

  function  updateProjetoReducer(projetos, projeto){
    let index = projetos.map(p => p.id).indexOf(projeto.id);
    projetos.splice(index, 1, projeto);
    return projetos;
}

export const sliceProjeto = createSlice({
    name: 'projetos',
    initialState: salvaProjetos,
    reducers: {
       updateProjeto: (state, action) => updateProjetoReducer(state, action.payload)
    }
})

export const {updateProjeto} = sliceProjeto.actions
export default sliceProjeto.reducer
