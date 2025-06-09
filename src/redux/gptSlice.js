import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt", 
    initialState: {
        showGptSearchPage: false,
        movies: [],
        movieNames: [],
        loading: false,
        error: false
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
        },
        setLoading: (state,action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const {toggleGptSearchPage, addMovies, addMovieNames, setLoading, setError} = gptSlice.actions;
export default gptSlice.reducer;