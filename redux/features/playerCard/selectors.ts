import { RootState } from "@/redux/store";

export const selectActiveCardId = (state: RootState) =>
  state.playerCard.activeCardId;
