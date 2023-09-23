import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieInfo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    movieByName: null,
    recentSearch: [],
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieInfoById: (state, action) => {
      state.movieInfo = action.payload;
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
    addMovieByName: (state, action) => {
      state.movieByName = action.payload;
    },
    addRecentSearch: (state, action) => {
      state.recentSearch = [...state.recentSearch, action.payload];
    },
    // removeRecentSearch: (state, action) => {
    //   const res = current(state.recentSearch);
    //   console.log(res);
    //   const ress = res.filter((item) => item !== action.payload);
    //   console.log(ress);
    //   state.recentSearch = ress;
    // },
  },
});

export const {
  addNowPlayingMovies,
  addMovieInfoById,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addMovieByName,
  addRecentSearch,
  removeRecentSearch,
} = movieSlice.actions;
export default movieSlice.reducer;
