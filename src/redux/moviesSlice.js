import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    mxPlayerMovies: [],
    nowPlayingMovies: [],
    popularMovies: [],
    upcomingMovies: [],
    topRatedMovies: [],
    trailer: null,
    mainMovieId: null,
    movieDetails: {},
    movieCredits: [],
  },
  reducers: {
    addMxPlayerMovies: (state, action) => {
      state.mxPlayerMovies = action.payload;
    },
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
      state.trailer = action.payload;
    },
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    addMovieCredits: (state, action) => {
      state.movieCredits = action.payload;
    },
  },
});

export const {
  addMxPlayerMovies,
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addMovieDetails,
  addMainMovieId,
  addTrailer,
  addMovieCredits,
} = moviesSlice.actions;

export default moviesSlice.reducer;
