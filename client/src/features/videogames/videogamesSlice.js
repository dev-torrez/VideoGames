import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const videoGames = createAsyncThunk(
    "videogames/videoGames",
    async( _, {rejectWithValue})=>{
        try{
            const response = await axios.get('/videogames')
            return response.data
        }
        catch(error){
            return rejectWithValue(error.message)
        }
    }
)
export const nameFilter = createAsyncThunk(
    "videogames/nameFilter",
    async(inputValue, {rejectWithValue})=>{
        try{
            const response = await axios.get(`/videogame?name=${inputValue}`)
            return response.data
        }
        catch(error){
            return rejectWithValue(error.message)
        }
    }
)
export const detailVideogame = createAsyncThunk(
    "videogames/detailVideogame",
    async(id, {rejectWithValue})=>{
        try{
            const response = await axios.get(`/videogames/${id}`)
            return response.data
        }
        catch(error){
            return rejectWithValue(error.message)
        }
    }
)

const videogamesSlice = createSlice({
    name: "videogames",
    initialState: {
        videogames: [],
        detail:{},
        genresFilter:[],
        maxminFilter:[],
        recursoExtra:[],
        loadingGames: false,
        loadingDetail: false
    },
    reducers: {
        filterByGender: (state, action)=>{
            if(action.payload === "todos"){
                state.videogames = state.recursoExtra
                state.genresFilter = state.recursoExtra
            }
            else{
                const filtered = state.recursoExtra.filter((element)=>{
                    return element.genres.some((genre)=>{
                        return genre === action.payload
                    })
                })
                state.videogames = filtered
                state.genresFilter = filtered
                state.maxminFilter = filtered
            }
        },
        filterByOrigin: (state, action)=>{
            if(action.payload === "todos"){
                state.videogames = state.genresFilter
                state.maxminFilter = state.genresFilter
            }
            else if(action.payload === "creados"){
                const filtered = state.genresFilter.filter((element)=>{
                    return typeof element.id === "string"
                })
                state.videogames = filtered
                state.maxminFilter = filtered
            }
            else{
                const filtered = state.genresFilter.filter((element)=>{
                    return typeof element.id === "number"
                })
                state.videogames = filtered
                state.maxminFilter = filtered
            }
        },
        orderVideoGames: (state, action)=>{
            switch(action.payload){
                case "normal":
                    state.videogames = state.maxminFilter
                    break
                case "mayor":
                    state.videogames.sort((a, b)=>b.rating - a.rating)
                    break
                case "menor":
                    state.videogames.sort((a, b)=>a.rating - b.rating)
                    break
                case "az":
                    state.videogames.sort((a, b)=> a.name.localeCompare(b.name))
                    break
                case "za":
                    state.videogames.sort((a, b)=> b.name.localeCompare(a.name))
                    break
                default:
                    break
            }
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(videoGames.fulfilled, (state, action)=>{
            state.videogames = action.payload
            state.recursoExtra = action.payload
            state.genresFilter = action.payload
            state.maxminFilter = action.payload
            state.loadingGames = true
        })
        .addCase(videoGames.pending, (state)=>{
            state.loadingGames = false
        })
        .addCase(videoGames.rejected, (state, action)=>{
            console.log("Error")
        })
        builder.addCase(nameFilter.fulfilled, (state, action)=>{
            state.videogames = action.payload
            state.genresFilter = action.payload
            state.maxminFilter = action.payload
            state.loadingGames = true
        })
        .addCase(nameFilter.pending, (state)=>{
            state.loadingGames = false
        })
        builder.addCase(detailVideogame.fulfilled, (state, action)=>{
            state.detail = action.payload
            state.loadingDetail = true
        })
        .addCase(detailVideogame.pending, (state)=>{
            state.loadingDetail = false
        })
    }
});

export const {
    filterByGender,
    filterByOrigin,
    orderVideoGames
} = videogamesSlice.actions

export default videogamesSlice.reducer