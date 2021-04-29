import {configureStore} from "@reduxjs/toolkit";
import projetoRedu from '../AddProjeto/SliceProjeto.js'
import loginRedu from '../Users/UserSlice.js'
import perfilRedu from '../AddPerfil/SlicePerfil.js'
import postRedu from '../AddPostagem/SlicePostagem.js'

const store = configureStore({
    reducer: { 
        projetos:projetoRedu,
        logins :loginRedu ,
        usuario : perfilRedu,
        postagem : postRedu
    }
});
export default store;