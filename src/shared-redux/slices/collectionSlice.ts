import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialCollectionState = {
  countMode: "All cards",
  rareDraftFactor: 3,
  mythicDraftFactor: 0.14,
  boosterWinFactor: 1.2,
  futureBoosters: 0
};

type Collection = typeof initialCollectionState;

const _setCountMode = (
  state: Collection,
  action: PayloadAction<string>
): void => {
  state.countMode = action.payload;
};

const _setRareDraftFactor = (
  state: Collection,
  action: PayloadAction<number>
): void => {
  state.rareDraftFactor = action.payload;
};

const _setMythicDraftFactor = (
  state: Collection,
  action: PayloadAction<number>
): void => {
  state.mythicDraftFactor = action.payload;
};

const _setBoosterWinFactor = (
  state: Collection,
  action: PayloadAction<number>
): void => {
  state.boosterWinFactor = action.payload;
};

const _setFutureBoosters = (
  state: Collection,
  action: PayloadAction<number>
): void => {
  state.futureBoosters = action.payload;
};

const collectionSlice = createSlice({
  name: "collection",
  initialState: initialCollectionState,
  reducers: {
    setCountMode: _setCountMode,
    setRareDraftFactor: _setRareDraftFactor,
    setMythicDraftFactor: _setMythicDraftFactor,
    setBoosterWinFactor: _setBoosterWinFactor,
    setFutureBoosters: _setFutureBoosters
  }
});

export const {
  setBoosterWinFactor,
  setCountMode,
  setFutureBoosters,
  setMythicDraftFactor,
  setRareDraftFactor
} = collectionSlice.actions;
export default collectionSlice;
