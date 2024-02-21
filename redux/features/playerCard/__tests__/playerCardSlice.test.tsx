import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import playerCardReducer, { setActiveCardId } from "../playerCardSlice";

describe("playerCardSlice tests", () => {
  let store: EnhancedStore;

  beforeEach(() => {
    store = configureStore({ reducer: { playerCard: playerCardReducer } });
  });

  test("should handle initial state", () => {
    expect(store.getState().playerCard).toEqual({ activeCardId: null });
  });

  test("should handle setActiveCardId", () => {
    const testCardId = "123";
    store.dispatch(setActiveCardId(testCardId));
    expect(store.getState().playerCard.activeCardId).toEqual(testCardId);
  });
});
