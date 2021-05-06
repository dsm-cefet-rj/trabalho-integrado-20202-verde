import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
//import {Urlbase} from 'C:/Users/Eduardo//Documents/GitHub/trabalho-integrado-20202-verde/PORTFEED/src/Urlbase.js'
import {httpGet, httpPut, httpPost, httpDelete} from 'C:/Users/pedro/OneDrive/Documentos/GitHub/trabalho-integrado-20202-verde/portfeed/src/Utils'

const Urlbase = 'http://localhost:3004';

const postagemAdapter = createEntityAdapter();

const salvaPostagem = postagemAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const fetchPostagem = createAsyncThunk('Postagem/fetchPostagem', async () => {
    return await httpGet(`/postagem`);
});

export const deletePostagemServer = createAsyncThunk('Postagem/deletePostagemServer', async (idPostagem, {getState}) => {
    await httpDelete(`/postagem/${idPostagem}`);
    return idPostagem;
});

export const updatePostagemServer = createAsyncThunk('Postagem/updatePostagemServer', async (postagem, {getState}) => {
    return await httpPut(`/postagem/${postagem.id}`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const addPostagemServer = createAsyncThunk('Postagem/addPostagemServer', async (postagem, {getState}) => {
    return await httpPost(`/postagem`, postagem, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
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

