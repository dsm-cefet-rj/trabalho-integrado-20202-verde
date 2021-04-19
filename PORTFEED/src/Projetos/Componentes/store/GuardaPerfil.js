import {configureStore} from "@reduxjs/toolkit";
import slice from '../AddPerfil/SlicePerfil.js'

const store = configureStore({
    reducer: { usuario:slice }
});
export default store;