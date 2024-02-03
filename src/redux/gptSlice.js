import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt", 
    initialState: {
        showGptSearchPage: false,
        movies: [],
        movieNames: []
    },
    reducers: {
        toggleGptSearchPage: (state) => {
            state.showGptSearchPage = !state.showGptSearchPage
        },
        addMovies: (state, action) => {
            state.movies = action.payload
        },
        addMovieNames: (state, action) => {
            state.movieNames = action.payload;
        }
    }
})

export const {toggleGptSearchPage, addMovies, addMovieNames} = gptSlice.actions;
export default gptSlice.reducer;