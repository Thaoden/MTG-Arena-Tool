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

type SetBoosterWinFactorArg = {
  type: "SET_BOOSTER_WIN_FACTOR";
  arg: Parameters<typeof _setBoosterWinFactor>[1]["payload"];
};

type SetCountModeArg = {
  type: "SET_COUNT_MODE";
  arg: Parameters<typeof _setCountMode>[1]["payload"];
};

type SetFutureBoostersArg = {
  type: "SET_FUTURE_BOOSTERS";
  arg: Parameters<typeof _setFutureBoosters>[1]["payload"];
};

type SetMythicDraftFactorArg = {
  type: "SET_MYTHIC_DRAFT_FACTOR";
  arg: Parameters<typeof _setMythicDraftFactor>[1]["payload"];
};

type SetRareDraftFactorArg = {
  type: "SET_RARE_DRAFT_FACTOR";
  arg: Parameters<typeof _setRareDraftFactor>[1]["payload"];
};

export type CollectionReducerArgs =
  | SetBoosterWinFactorArg
  | SetCountModeArg
  | SetFutureBoostersArg
  | SetMythicDraftFactorArg
  | SetRareDraftFactorArg;

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
