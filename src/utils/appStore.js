import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"
import moviesReducer from "../utils/moviesSlice"
import gptReducer from "../utils/gptSlice"


const appStore=configureStore({
    reducer:{
        movies: moviesReducer,
        user: userReducer,
       gpt:gptReducer,
    },
});

export default appStore;
