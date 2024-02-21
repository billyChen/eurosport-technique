// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import playerCardReducer, {
  PlayerCardState,
} from "./features/playerCard/playerCardSlice";

export interface RootState {
  playerCard: PlayerCardState;
}

export const store = configureStore({
  reducer: {
    playerCard: playerCardReducer,
  },
});
