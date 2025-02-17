import { createSlice } from "@reduxjs/toolkit"


const gptSlice = createSlice({
    name: "gpt",
   initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    apikey : null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    addApiKey :(state,action)=>{
      state.apikey=action.payload;
    }
  },
});


export const { toggleGptSearchView, addGptMovieResult,addApiKey} = gptSlice.actions;

export default gptSlice.reducer;