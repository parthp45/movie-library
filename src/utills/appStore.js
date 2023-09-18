import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import userReducer from "./userSlice";
import videoReducer from "./videoSlice";
import headerReducer from "./headerSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    videoInfo: videoReducer,
    search: headerReducer,
  },
});

export default appStore;
