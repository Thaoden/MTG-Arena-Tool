import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";

const initialCollectionState = {
  countMode: "All cards",
  rareDraftFactor: 3,
  mythicDraftFactor: 0.14,
  boosterWinFactor: 1.2,
  futureBoosters: 0
};

type Collection = typeof initialCollectionState;

const collectionSlice = createSlice<Collection, SliceCaseReducers<Collection>>({
  name: "collection",
  initialState: initialCollectionState,
  reducers: {
    setCountMode: (state: Collection, action): void => {
      state.countMode = action.payload;
    },
    setRareDraftFactor: (state: Collection, action): void => {
      state.rareDraftFactor = action.payload;
    },
    setMythicDraftFactor: (state: Collection, action): void => {
      state.mythicDraftFactor = action.payload;
    },
    setBoosterWinFactor: (state: Collection, action): void => {
      state.boosterWinFactor = action.payload;
    },
    setFutureBoosters: (state: Collection, action): void => {
      state.futureBoosters = action.payload;
    }
  }
});

export default collectionSlice;
