// src/features/playerCard/playerCardSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const playerCardSlice = createSlice({
  name: "playerCard",
  initialState: {
    activeCardId: null,
  },
  reducers: {
    setActiveCardId: (state, action) => {
      state.activeCardId = action.payload;
    },
  },
});

export const { setActiveCardId } = playerCardSlice.actions;

export default playerCardSlice.reducer;
