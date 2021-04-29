import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
//import {Urlbase} from 'C:/Users/Eduardo//Documents/GitHub/trabalho-integrado-20202-verde/PORTFEED/src/Urlbase.js'
import {httpGet, httpPut, httpPost, httpDelete} from 'C:/Users/pedro/OneDrive/Documentos/GitHub/trabalho-integrado-20202-verde/PORTFEED/src/Utils'
import store from 'C:/Users/pedro/OneDrive/Documentos/GitHub/trabalho-integrado-20202-verde/PORTFEED/src/Projetos/Componentes/store/GuardaUser'

const Urlbase = 'http://localhost:3004';

const projetosAdapter = createEntityAdapter();



const salvaProjetos = projetosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const fetchProjetos = createAsyncThunk('Projeto/fetchProjetos', async (_, {getState}) => {
    return await httpGet(`${Urlbase}/projetos`);
});

export const deleteProjetoServer = createAsyncThunk('projetos/deleteProjetoServer', async (idProjeto, {getState}) => {
    await httpDelete(`${Urlbase}/projetos/${idProjeto}`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
    return idProjeto;
});

export const updateProjetoServer = createAsyncThunk('Projeto/updateProjetoServer', async (project, {getState}) => {
    return await httpPut(`${Urlbase}/projetos/${project.id}`, project, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const addProjetoServer = createAsyncThunk('projetos/addProjetoServer', async (project, {getState}) => {
    return await httpPost(`${Urlbase}/projetos`, project, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}})
});
export const sliceProjeto = createSlice({
    name: 'projetos',
    initialState: salvaProjetos,
    extraReducers: {
        [fetchProjetos.pending]: (state, action) => {state.status = 'loading'},
        [fetchProjetos.fulfilled]: (state, action) => {state.status = 'loaded'; projetosAdapter.setAll(state, action.payload);},
        [fetchProjetos.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
        [updateProjetoServer.pending]: (state, action) => {state.status = 'loading'},
        [updateProjetoServer.fulfilled]: (state, action) => {state.status = 'saved'; projetosAdapter.updateOne(state, action.payload);},
        [addProjetoServer.pending]: (state, action) => {state.status = 'loading'},
        [addProjetoServer.fulfilled]: (state, action) => {state.status = 'saved'; projetosAdapter.addOne(state, action.payload);},
        [deleteProjetoServer.pending]: (state, action) => {state.status = 'loading'},
       [deleteProjetoServer.fulfilled]: (state, action) => {state.status = 'deleted'; projetosAdapter.removeOne(state, action.payload);},
    }
})

export default sliceProjeto.reducer

export const {
    selectAll: selectAllProjetos,
    selectById: selectProjetosById,
    selectIds: selectProjetosIds
} = projetosAdapter.getSelectors(state => state.projetos)

