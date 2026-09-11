import { configureStore } from "@reduxjs/toolkit";
import videogamesReducer from "../features/videogames/videogamesSlice"

export const store = configureStore({
    reducer: {
        videogames: videogamesReducer
    }
})