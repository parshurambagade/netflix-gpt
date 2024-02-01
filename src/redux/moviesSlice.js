import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: [], 
        popularMovies: [],
        upcomingMovies: [],
        topRatedMovies: [],
        trailer: null,
        mainMovieId: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addMainMovieId: (state, action) => {
            state.mainMovieId = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailer =  action.payload;
        }
    }
})

export const {addNowPlayingMovies,addPopularMovies, addTopRatedMovies, addUpcomingMovies, addMainMovieId, addTrailer} = moviesSlice.actions;

export default moviesSlice.reducer;