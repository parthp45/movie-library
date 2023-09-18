import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "search",
  initialState: {
    open: false,
  },
  reducers: {
    toggleSearchModal: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { toggleSearchModal } = headerSlice.actions;
export default headerSlice.reducer;
