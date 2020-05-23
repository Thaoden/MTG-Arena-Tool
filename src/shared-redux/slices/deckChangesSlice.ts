import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
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
    setChange: (state: DeckChanges, action): void => {
      const change = action.payload as DeckChange;
      globalStore.deckChanges[change.id] = { ...change };
      if (state.deckChangesIndex.indexOf(change.id) === -1) {
        state.deckChangesIndex.push(change.id);
      }
    },
    setManyChangees: (state: DeckChanges, action): void => {
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

export default deckChangesSlice;
