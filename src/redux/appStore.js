import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";
import personSlice from "./personSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: moviesSlice,
        person: personSlice,
        gpt: gptSlice,
        config: configSlice
    }
})

export default appStore;