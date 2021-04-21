import {configureStore} from "@reduxjs/toolkit";
import slice from '../AddPostagem/SlicePostagem.js'

const store = configureStore({
    reducer: {postagem:slice}
});

export default store;