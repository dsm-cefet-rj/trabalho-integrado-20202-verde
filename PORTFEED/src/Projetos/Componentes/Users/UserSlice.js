import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import {httpGet, httpPut, httpPost, httpDelete} from 'C:/Users/pedro/OneDrive/Documentos/GitHub/trabalho-integrado-20202-verde/PORTFEED/src/Utils.js'

const Urlbase = 'http://localhost:3004';

const userAdapter = createEntityAdapter();

const initialState = userAdapter.getInitialState({
    status: 'not_loaded',
    error: null,
    currentToken: null,
    user: null,
    id: null
    /* o array user foi removido do state inicial, será criado pelo adapter */
});


export const loginServer = createAsyncThunk('users/loginServer', async (login) => {
    return await httpPost(`/users/login`, login);
});
export const signupServer = createAsyncThunk('users/signupServer', async (signup) => {
    return await httpPost(`/users/signup`, signup);
});
export const addIdLogin = createAsyncThunk('users/configId', async (usuario, {getState}) => {
    return await httpPut(`/users`, { "id" : "609c1e3f77d27e19a45734ca", "idperfil": "609c1e4777d27e19a45734cb"});
});

export const userSlice = createSlice({
    name: 'logins',
    initialState: initialState,
    extraReducers: {
       [signupServer.pending]: (state, action) => {state.status = 'registrando'},
       [signupServer.fulfilled]: (state, action) => {state.status = 'registrado'},  
       [loginServer.pending]: (state, action) => {state.status = 'trying_login'},
       [loginServer.fulfilled]: (state, action) => {state.status = 'logged_in'; userAdapter.addOne(state, action.payload); state.currentToken = action.payload.token; state.user = action.payload.name;  state.id = action.payload.id  },
       [loginServer.rejected]: (state) => {state.status = 'failed'},
    },
})

export default userSlice.reducer

export const {
    selectAll: selectAllLogin,
} = userAdapter.getSelectors(state => state.login)