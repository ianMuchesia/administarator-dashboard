import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./modeSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import {api} from './api'


const store = configureStore({
    reducer:{
        mode:globalSlice.reducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefault)=>getDefault().concat(api.middleware)
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;