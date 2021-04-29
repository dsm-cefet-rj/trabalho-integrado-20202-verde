import {configureStore} from "@reduxjs/toolkit";
import slice from '../Users/UserSlice.js'

const store = configureStore({
    reducer: { logins :slice }
});
export default store;