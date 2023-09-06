import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videoInfo",
  initialState: null,
  reducers: {
    addVideoInfoById: (state, action) => {
      return action.payload;
    },
  },
});

export const { addVideoInfoById } = videoSlice.actions;
export default videoSlice.reducer;
