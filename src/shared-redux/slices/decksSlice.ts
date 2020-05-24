import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import globalStore from "../../shared-store";
import { InternalDeck } from "../../types/Deck";

const initialDecksState = {
  decksIndex: [] as string[]
};

type Decks = typeof initialDecksState;

const _setDeck = (state: Decks, action: PayloadAction<InternalDeck>): void => {
  const deck = action.payload;
  globalStore.decks[deck.id] = { ...deck };
  if (state.decksIndex.indexOf(deck.id) === -1) {
    state.decksIndex.push(deck.id);
  }
};

const _setManyDecks = (
  state: Decks,
  action: PayloadAction<InternalDeck[]>
): void => {
  const newList: string[] = [];
  action.payload.map((deck: InternalDeck) => {
    if (state.decksIndex.indexOf(deck.id) === -1) {
      globalStore.decks[deck.id] = deck;
      newList.push(deck.id);
    }
  });
  state.decksIndex = [...newList, ...state.decksIndex];
};

const _setManyStaticDecks = (
  state: Decks,
  action: PayloadAction<InternalDeck[]>
): void => {
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
};

type SetDeckArg = {
  type: "SET_DECK";
  arg: Parameters<typeof _setDeck>[1]["payload"];
};

type SetManyDecksArg = {
  type: "SET_MANY_DECKS";
  arg: Parameters<typeof _setManyDecks>[1]["payload"];
};

type SetManyStaticDecksArg = {
  type: "SET_MANY_STATIC_DECKS";
  arg: Parameters<typeof _setManyStaticDecks>[1]["payload"];
};

export type DecksReducerTypes =
  | SetDeckArg
  | SetManyDecksArg
  | SetManyStaticDecksArg;

const decksSlice = createSlice({
  name: "decks",
  initialState: initialDecksState,
  reducers: {
    setDeck: _setDeck,
    setManyDecks: _setManyDecks,
    setManyStaticDecks: _setManyStaticDecks
  }
});

export const { setDeck, setManyDecks, setManyStaticDecks } = decksSlice.actions;

export default decksSlice;
