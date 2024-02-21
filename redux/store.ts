// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import playerCardReducer from "./features/playerCard/playerCardSlice";

export const store = configureStore({
  reducer: {
    playerCard: playerCardReducer,
  },
});
