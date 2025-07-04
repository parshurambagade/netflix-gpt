import { GoogleGenerativeAI } from "@google/generative-ai";
import { GPT_PROMPT } from "./constants";

import {
  addMovieNames,
  addMovies,
  setError,
  setLoading,
} from "../redux/gptSlice";

const getGptResults = async (searchQuery, dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setError(false));
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
    const model = genAI?.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model?.generateContent(
      GPT_PROMPT + searchQuery?.current.value
    );
    const movieNames =
      result?.response?.candidates[0]?.content?.parts[0]?.text?.split(",");
    dispatch(addMovieNames(movieNames));
    const promiseArray = movieNames.map((movie) => getTmdbMovies(movie));
    const results = await Promise?.all(promiseArray);
    dispatch(addMovies(results));
  } catch (err) {
    console.error(err);
    dispatch(setLoading(false));
    dispatch(setError(true));
  } finally {
    dispatch(setLoading(false));
  }
};

const getTmdbMovies = async (movieName) => {
  try {
    const data = await fetch(
      `/api/search-movies?query=${encodeURIComponent(movieName)}`
    );
    const json = await data.json();
    return json?.results?.filter((movie) => movie?.poster_path);
  } catch (err) {
    console.error(err);
  }
};

export default getGptResults;
