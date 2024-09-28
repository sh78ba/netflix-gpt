import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"
import moviesReducer from "../utils/moviesSlice"


const appStore=configureStore({
    reducer:{
        movies: moviesReducer,
        user: userReducer,
        
    },
});

export default appStore;
