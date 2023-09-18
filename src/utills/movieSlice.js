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
  },
});

export const {
  addNowPlayingMovies,
  addMovieInfoById,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addMovieByName,
} = movieSlice.actions;
export default movieSlice.reducer;
