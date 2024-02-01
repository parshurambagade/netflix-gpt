import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: [], 
        trailer: [],
        mainMovieId: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMainMovieId: (state, action) => {
            state.mainMovieId = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailer =  action.payload;
        }
    }
})

export const {addNowPlayingMovies, addMainMovieId, addTrailer} = moviesSlice.actions;

export default moviesSlice.reducer;