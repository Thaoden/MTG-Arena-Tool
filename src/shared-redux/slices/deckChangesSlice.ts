import {
  createSlice,
  SliceCaseReducers,
  PayloadAction
} from "@reduxjs/toolkit";
import globalStore from "../../shared-store";
import { DeckChange } from "../../types/Deck";

const initialDeckChangesState = {
  deckChangesIndex: [] as string[]
};

type DeckChanges = typeof initialDeckChangesState;

const deckChangesSlice = createSlice<
  DeckChanges,
  SliceCaseReducers<DeckChanges>
>({
  name: "deckChanges",
  initialState: initialDeckChangesState,
  reducers: {
    setChange: (
      state: DeckChanges,
      action: PayloadAction<DeckChange>
    ): void => {
      const change = action.payload;
      globalStore.deckChanges[change.id] = { ...change };
      if (state.deckChangesIndex.indexOf(change.id) === -1) {
        state.deckChangesIndex.push(change.id);
      }
    },
    setManyChangees: (
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
    }
  }
});

export const { setChange, setManyChangees } = deckChangesSlice.actions;

export default deckChangesSlice;
