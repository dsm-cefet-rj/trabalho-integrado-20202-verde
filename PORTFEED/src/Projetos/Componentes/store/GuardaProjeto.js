import {configureStore} from "@reduxjs/toolkit";
import slice from '../AddProjeto/SliceProjeto.js'

const store = configureStore({
    reducer: { projetos:slice }
});
export default store;