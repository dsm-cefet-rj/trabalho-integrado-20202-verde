import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
//import {Urlbase} from 'C:/Users/Eduardo//Documents/GitHub/trabalho-integrado-20202-verde/PORTFEED/src/Urlbase.js'
import {httpGet, httpPut, httpPost, httpDelete} from 'C:/Users/pedro/OneDrive/Documentos/GitHub/trabalho-integrado-20202-verde/portfeed/src/Utils'

const Urlbase = 'http://localhost:3004';

const postagemAdapter = createEntityAdapter();

const salvaPostagem = postagemAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const fetchPostagem = createAsyncThunk('Projeto/fetchPostagem', async () => {
    return await httpGet(`${Urlbase}/postagem`);
});

export const deletePostagemServer = createAsyncThunk('projetos/deletePostagemServer', async (idPostagem) => {
    await httpDelete(`${Urlbase}/postagem/${idPostagem}`);
    return idPostagem;
});

export const updatePostagemServer = createAsyncThunk('Projeto/updatePostagemServer', async (postagem, {getState}) => {
    return await httpPut(`${Urlbase}/postagem/${postagem.id}`);
});

export const addPostagemServer = createAsyncThunk('projetos/addPostagemServer', async (postagem, {getState}) => {
    return await httpPost(`${Urlbase}/postagem`, postagem);
});
export const slicePostagem = createSlice({
    name: 'postagem',
    initialState: salvaPostagem,
    extraReducers: {
        [fetchPostagem.pending]: (state, action) => {state.status = 'loading'},
        [fetchPostagem.fulfilled]: (state, action) => {state.status = 'loaded'; postagemAdapter.setAll(state, action.payload);},
        [fetchPostagem.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
        [updatePostagemServer.pending]: (state, action) => {state.status = 'loading'},
        [updatePostagemServer.fulfilled]: (state, action) => {state.status = 'saved'; postagemAdapter.updateOne(state, action.payload);},
        [addPostagemServer.pending]: (state, action) => {state.status = 'loading'},
        [addPostagemServer.fulfilled]: (state, action) => {state.status = 'saved'; postagemAdapter.addOne(state, action.payload);},
        [deletePostagemServer.pending]: (state, action) => {state.status = 'loading'},
        [deletePostagemServer.fulfilled]: (state, action) => {state.status = 'deleted'; postagemAdapter.removeOne(state, action.payload);},
    }
})

export default slicePostagem.reducer

export const {
    selectAll: selectAllPostagem,
    selectById: selectPostagemById,
    selectIds: selectPostagemIds
} = postagemAdapter.getSelectors(state => state.postagem)

