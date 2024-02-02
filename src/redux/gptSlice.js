import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt", 
    initialState: {
        showGptSearchPage: false
    },
    reducers: {
        toggleGptSearchPage: (state) => {
            state.showGptSearchPage = !state.showGptSearchPage
        }
    }
})

export const {toggleGptSearchPage} = gptSlice.actions;
export default gptSlice.reducer;