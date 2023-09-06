import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import userReducer from "./userSlice";
import videoReducer from "./videoSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    videoInfo: videoReducer,
  },
});

export default appStore;
