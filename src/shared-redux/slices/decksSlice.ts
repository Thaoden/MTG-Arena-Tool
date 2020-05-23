import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import globalStore from "../../shared-store";
import { InternalDeck } from "../../types/Deck";

const initialDecksState = {
  decksIndex: [] as string[]
};

type Decks = typeof initialDecksState;

const decksSlice = createSlice<Decks, SliceCaseReducers<Decks>>({
  name: "decks",
  initialState: initialDecksState,
  reducers: {
    setDeck: (state: Decks, action): void => {
      const deck = action.payload as InternalDeck;
      globalStore.decks[deck.id] = { ...deck };
      if (state.decksIndex.indexOf(deck.id) === -1) {
        state.decksIndex.push(deck.id);
      }
    },
    setManyDecks: (state: Decks, action): void => {
      const newList: string[] = [];
      action.payload.map((deck: InternalDeck) => {
        if (state.decksIndex.indexOf(deck.id) === -1) {
          globalStore.decks[deck.id] = deck;
          newList.push(deck.id);
        }
      });
      state.decksIndex = [...newList, ...state.decksIndex];
    },
    setManyStaticDecks: (state: Decks, action): void => {
      const newList: string[] = [];
      action.payload.map((deck: InternalDeck) => {
        globalStore.decks[deck.id] = deck;
        if (globalStore.staticDecks.indexOf(deck.id) === -1) {
          globalStore.staticDecks.push(deck.id);
        }
        if (state.decksIndex.indexOf(deck.id) === -1) {
          newList.push(deck.id);
        }
      });
      state.decksIndex = [...newList, ...state.decksIndex];
    }
  }
});

export default decksSlice;
