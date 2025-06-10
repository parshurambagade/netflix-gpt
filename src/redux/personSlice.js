import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
  name: "person",
  initialState: {
    personId: null,
    personDetails: {},
    movieCredits: [],
  },
  reducers: {
    addPersonId: (state, action) => {
      state.personId = action.payload;
    },
    addPersonDetails: (state, action) => {
      state.personDetails = action.payload;
    },
    addMovieCredits: (state, action) => {
      state.movieCredits = action.payload;
    },
  },
});

export const {
  addPersonDetails,
  addPersonId,
  addMovieCredits,
} = personSlice.actions;

export default personSlice.reducer;
