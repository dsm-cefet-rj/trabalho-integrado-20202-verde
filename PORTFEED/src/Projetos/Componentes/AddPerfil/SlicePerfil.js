import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
//import {Urlbase} from 'C:/Users/Eduardo//Documents/GitHub/trabalho-integrado-20202-verde/PORTFEED/src/Urlbase.js'
import {httpGet, httpPut, httpPost, httpDelete} from 'C:/Users/pedro/OneDrive/Documentos/GitHub/trabalho-integrado-20202-verde/PORTFEED/src/Utils.js'

const Urlbase = 'http://localhost:3004';

const usuarioAdapter = createEntityAdapter();

const salvausuario = usuarioAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const fetchUsuario = createAsyncThunk('usuario/fetchUsuario', async () => {
    return await httpGet(`${Urlbase}/usuario`);
});

export const deleteusuarioServer = createAsyncThunk('usuario/deleteusuarioServer', async (idPerfil, {getState}) => {
    await httpDelete(`${Urlbase}/usuario/${idPerfil}`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
    return idPerfil;
});

export const updateusuarioServer = createAsyncThunk('usuario/updateusuarioServer', async (perfil, {getState}) => {
    return await httpPut(`${Urlbase}/usuario/${perfil.id}`, perfil, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const addusuarioServer = createAsyncThunk('usuario/addusuarioServer', async (perfil, {getState}) => {
    return await httpPost(`${Urlbase}/usuario`, perfil, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}})
});
export const sliceUsuario = createSlice({
    name: 'usuario',
    initialState: salvausuario,
    extraReducers: {
        [fetchUsuario.pending]: (state, action) => {state.status = 'loading'},
        [fetchUsuario.fulfilled]: (state, action) => {state.status = 'loaded'; usuarioAdapter.setAll(state, action.payload);},
        [fetchUsuario.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
        [updateusuarioServer.pending]: (state, action) => {state.status = 'loading'},
        [updateusuarioServer.fulfilled]: (state, action) => {state.status = 'saved'; usuarioAdapter.updateOne(state, action.payload);},
        [addusuarioServer.pending]: (state, action) => {state.status = 'loading'},
        [addusuarioServer.fulfilled]: (state, action) => {state.status = 'saved'; usuarioAdapter.addOne(state, action.payload);},
        [deleteusuarioServer.pending]: (state, action) => {state.status = 'loading'},
       [deleteusuarioServer.fulfilled]: (state, action) => {state.status = 'deleted'; usuarioAdapter.removeOne(state, action.payload);},
    }
})

export default sliceUsuario.reducer

export const {
    selectAll: selectAllusuario,
    selectById: selectusuarioById,
    selectIds: selectusuarioIds
} = usuarioAdapter.getSelectors(state => state.usuario)

