import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import globalStore from "../../shared-store";
import { DeckChange } from "../../types/Deck";

const initialDeckChangesState = {
  deckChangesIndex: [] as string[]
};

type DeckChanges = typeof initialDeckChangesState;

const _setChange = (
  state: DeckChanges,
  action: PayloadAction<DeckChange>
): void => {
  const change = action.payload;
  globalStore.deckChanges[change.id] = { ...change };
  if (state.deckChangesIndex.indexOf(change.id) === -1) {
    state.deckChangesIndex.push(change.id);
  }
};

const _setManyChanges = (
  state: DeckChanges,
  action: PayloadAction<DeckChange[]>
): void => {
  const newList: string[] = [];
  action.payload.map((change: DeckChange) => {
    if (state.deckChangesIndex.indexOf(change.id) === -1) {
      newList.push(change.id);
    }
    globalStore.deckChanges[change.id] = change;
  });
  state.deckChangesIndex = [...newList, ...state.deckChangesIndex];
};

type SetDeckChangeArg = {
  type: "SET_DECK_CHANGE";
  arg: Parameters<typeof _setChange>[1]["payload"];
};

type SetManyDeckChangesArg = {
  type: "SET_MANY_DECK_CHANGES";
  arg: Parameters<typeof _setManyChanges>[1]["payload"];
};

export type DeckChangesReducerArgs = SetDeckChangeArg | SetManyDeckChangesArg;

const deckChangesSlice = createSlice({
  name: "deckChanges",
  initialState: initialDeckChangesState,
  reducers: {
    setChange: _setChange,
    setManyChanges: _setManyChanges
  }
});

export const { setChange, setManyChanges } = deckChangesSlice.actions;

export default deckChangesSlice;
