import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {Urlbase} from 'C:/Users/pedro/OneDrive/Documentos/GitHub/trabalho-integrado-20202-verde/portfeed/src/Urlbase.js'
import {httpGet, httpPut} from 'C:/Users/pedro/OneDrive/Documentos/GitHub/trabalho-integrado-20202-verde/portfeed/src/Utils'

const projetosAdapter = createEntityAdapter();

const salvaProjetos = projetosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
    /* o array projetos foi removido do state inicial, será criado pelo adapter */
});

export const fetchProjetos = createAsyncThunk('Projeto/fetchProjetos', async () => {
    return await httpGet(`http://localhost:3004/projetos`);
});

export const updateProjetoServer = createAsyncThunk('Projeto/updateProjetoServer', async (projeto) => {
    return await httpPut(`http://localhost:3004/projetos/0`, projeto);
});

export const addProjetoServer = createAsyncThunk('projetos/addProjetoServer', async (projeto, {getState}) => {
    return await httpPost(`http://localhost:3004/projetos`, projeto)
});
export const sliceProjeto = createSlice({
    name: 'projetos',
    initialState: salvaProjetos,
    extraReducers: {
        [fetchProjetos.pending]: (state, action) => {state.status = 'loading'},
        [fetchProjetos.fulfilled]: (state, action) => {state.status = 'loaded'; projetosAdapter.setAll(state, action.payload);},
        [fetchProjetos.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
        [updateProjetoServer.pending]: (state, action) => {state.status = 'loading'},
        [updateProjetoServer.fulfilled]: (state, action) => {state.status = 'saved'; projetosAdapter.upsertOne(state, action.payload);},
        [addProjetoServer.pending]: (state, action) => {state.status = 'loading'},
        [addProjetoServer.fulfilled]: (state, action) => {state.status = 'saved'; projetosAdapter.addOne(state, action.payload);},
    }
})

export default sliceProjeto.reducer

export const {
    selectAll: selectAllProjetos,
    selectById: selectProjetosById,
    selectIds: selectProjetosIds
} = projetosAdapter.getSelectors(state => state.projetos)

