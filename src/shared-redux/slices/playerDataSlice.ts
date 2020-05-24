import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { differenceInDays } from "date-fns";

const playerDataState = {
  playerId: "",
  arenaId: "",
  playerName: "",
  arenaVersion: "",
  tagsColors: {} as Record<string, string>,
  deckTags: {} as Record<string, string[]>,
  playerDbPath: "",
  appDbPath: "",
  lastLogTimestamp: "",
  lastLogFormat: "",
  cards: {
    cards_time: Date.now(),
    cards_before: {} as Record<string, number>,
    cards: {} as Record<string, number>
  },
  cardsNew: {} as Record<string, number>,
  economy: {
    gold: 0,
    gems: 0,
    vault: 0,
    wcTrack: 0,
    wcCommon: 0,
    wcUncommon: 0,
    wcRare: 0,
    wcMythic: 0,
    trackName: "",
    trackTier: 0,
    currentLevel: 0,
    currentExp: 0,
    currentOrbCount: 0,
    boosters: [] as { collationId: number; count: number }[]
  },
  rank: {
    constructed: {
      rank: "",
      tier: 0,
      step: 0,
      won: 0,
      lost: 0,
      drawn: 0,
      percentile: 0,
      leaderboardPlace: 0,
      seasonOrdinal: 0
    },
    limited: {
      rank: "",
      tier: 0,
      step: 0,
      won: 0,
      lost: 0,
      drawn: 0,
      percentile: 0,
      leaderboardPlace: 0,
      seasonOrdinal: 0
    }
  }
};

type PlayerData = typeof playerDataState;

const incrementCardCount = (state: PlayerData, grpId: number): void => {
  state.cards.cards[grpId] = state.cards.cards[grpId] + 1 || 1;
  state.cardsNew[grpId] = state.cardsNew[grpId] + 1 || 1;
};

const _setPlayerId = (
  state: PlayerData,
  action: PayloadAction<string>
): void => {
  state.arenaId = action.payload;
};

const _setPlayerName = (
  state: PlayerData,
  action: PayloadAction<string>
): void => {
  state.playerName = action.payload;
};

const _setArenaVersion = (
  state: PlayerData,
  action: PayloadAction<string>
): void => {
  state.arenaVersion = action.payload;
};

const _setRank = (
  state: PlayerData,
  action: PayloadAction<PlayerData["rank"]>
): void => {
  state.rank = action.payload;
};

const _setEconomy = (
  state: PlayerData,
  action: PayloadAction<PlayerData["economy"]>
): void => {
  state.economy = { ...action.payload };
};

const _setTagColors = (
  state: PlayerData,
  action: PayloadAction<Record<string, string>>
): void => {
  state.tagsColors = { ...state.tagsColors, ...action.payload };
};

const _editTagColor = (
  state: PlayerData,
  action: PayloadAction<{ tag: string; color: string }>
): void => {
  const { tag, color } = action.payload;
  state.tagsColors = { ...state.tagsColors, [tag]: color };
};

const _addCard = (state: PlayerData, action: PayloadAction<number>): void => {
  incrementCardCount(state, action.payload);
};

const _addCardsList = (
  state: PlayerData,
  action: PayloadAction<number[]>
): void => {
  action.payload.forEach((grpId: number) => {
    incrementCardCount(state, grpId);
  });
};

const _addCardsKeys = (
  state: PlayerData,
  action: PayloadAction<{ [grpId: string]: number }>
): void => {
  const now = Date.now();
  const json = action.payload;
  const newCards = { ...state.cards };
  // Update if a day has passed
  if (differenceInDays(now, new Date(newCards.cards_time)) > 0) {
    newCards.cards_before = { ...newCards.cards };
    newCards.cards_time = now;
  }
  newCards.cards = json;
  // Get the diff on cardsNew
  Object.keys(json).forEach((key: string) => {
    if (newCards.cards_before[key] === undefined) {
      state.cardsNew[key] = json[key];
    } else if (newCards.cards_before[key] < json[key]) {
      state.cardsNew[key] = json[key] - newCards.cards_before[key];
    }
  });
  state.cards = newCards;
};

const _addCardsFromStore = (state: PlayerData, action: any): void => {
  console.log("addCardsFromStore payload: ", action.payload);
  Object.assign(state.cards, action.payload);
  const json = action.payload;
  const newCards = { ...state.cardsNew };
  Object.keys(json.cards).forEach((key: string) => {
    if (json.cards_before[key] === undefined) {
      newCards[key] = json.cards[key];
    } else if (json.cards_before[key] < json.cards[key]) {
      newCards[key] = json.cards[key] - json.cards_before[key];
    }
  });
  state.cardsNew = newCards;
};

const _addDeckTag = (
  state: PlayerData,
  action: PayloadAction<{ tag: string; deck: string }>
): void => {
  const { tag, deck } = action.payload;
  const tags = state.deckTags[deck] || [];
  if (tags.indexOf(tag) == -1) tags.push(tag);
  state.deckTags[deck] = tags;
};

const _removeDeckTag = (
  state: PlayerData,
  action: PayloadAction<{ tag: string; deck: string }>
): void => {
  const { tag, deck } = action.payload;
  const tags = state.deckTags[deck] || [];
  if (tags.includes(tag)) {
    tags.splice(tags.indexOf(tag), 1);
  }
  state.deckTags[deck] = tags;
};

const _setDeckTags = (
  state: PlayerData,
  action: PayloadAction<Record<string, string[]>>
): void => {
  state.deckTags = action.payload;
};

const _setPlayerDb = (
  state: PlayerData,
  action: PayloadAction<string>
): void => {
  state.playerDbPath = action.payload;
};

const _setAppDb = (state: PlayerData, action: PayloadAction<string>): void => {
  state.appDbPath = action.payload;
};

type SetPlayerDbArg = {
  type: "SET_PLAYERDB";
  arg: Parameters<typeof _setPlayerDb>[1]["payload"];
};

type SetAppdbArg = {
  type: "SET_APPDB";
  arg: Parameters<typeof _setAppDb>[1]["payload"];
};

type SetPlayerIdArg = {
  type: "SET_PLAYER_ID";
  arg: Parameters<typeof _setPlayerId>[1]["payload"];
};

type SetPlayerNameArg = {
  type: "SET_PLAYER_NAME";
  arg: Parameters<typeof _setPlayerName>[1]["payload"];
};

type SetArenaVersionArg = {
  type: "SET_ARENA_VERSION";
  arg: Parameters<typeof _setArenaVersion>[1]["payload"];
};

type SetPlayerEconomyArg = {
  type: "SET_PLAYER_ECONOMY";
  arg: Parameters<typeof _setEconomy>[1]["payload"];
};

type SetTagColorsArg = {
  type: "SET_TAG_COLORS";
  arg: Parameters<typeof _setTagColors>[1]["payload"];
};

type EditTagColorArg = {
  type: "EDIT_TAG_COLOR";
  arg: Parameters<typeof _editTagColor>[1]["payload"];
};

type SetRankArg = {
  type: "SET_RANK";
  arg: Parameters<typeof _setRank>[1]["payload"];
};

type AddCardArg = {
  type: "ADD_CARD";
  arg: Parameters<typeof _addCard>[1]["payload"];
};

type AddCardsListArg = {
  type: "ADD_CARDS_LIST";
  arg: Parameters<typeof _addCardsList>[1]["payload"];
};

type AddCardsKeysArg = {
  type: "ADD_CARDS_KEYS";
  arg: Parameters<typeof _addCardsKeys>[1]["payload"];
};

type AddCardsFromStoreArg = {
  type: "ADD_CARDS_FROM_STORE";
  arg: Parameters<typeof _addCardsFromStore>[1]["payload"];
};

type RemoveDeckTagArg = {
  type: "REMOVE_DECK_TAG";
  arg: Parameters<typeof _removeDeckTag>[1]["payload"];
};

type AddDeckTagArg = {
  type: "ADD_DECK_TAG";
  arg: Parameters<typeof _addDeckTag>[1]["payload"];
};

type SetDeckTagsArg = {
  type: "SET_DECK_TAGS";
  arg: Parameters<typeof _setDeckTags>[1]["payload"];
};

export type PlayerDataReducerArgs =
  | SetPlayerDbArg
  | SetAppdbArg
  | SetPlayerIdArg
  | SetPlayerNameArg
  | SetArenaVersionArg
  | SetPlayerEconomyArg
  | SetTagColorsArg
  | EditTagColorArg
  | SetRankArg
  | AddCardArg
  | AddCardsListArg
  | AddCardsKeysArg
  | AddCardsFromStoreArg
  | RemoveDeckTagArg
  | AddDeckTagArg
  | SetDeckTagsArg;

const playerDataSlice = createSlice({
  name: "playerdata",
  initialState: playerDataState,
  reducers: {
    setPlayerId: _setPlayerId,
    setPlayerName: _setPlayerName,
    setArenaVersion: _setArenaVersion,
    setRank: _setRank,
    setEconomy: _setEconomy,
    setTagColors: _setTagColors,
    editTagColor: _editTagColor,
    addCard: _addCard,
    addCardsList: _addCardsList,
    addCardsKeys: _addCardsKeys,
    addCardsFromStore: _addCardsFromStore,
    addDeckTag: _addDeckTag,
    removeDeckTag: _removeDeckTag,
    setDeckTags: _setDeckTags,
    setPlayerDb: _setPlayerDb,
    setAppDb: _setAppDb
  }
});

export const {
  setPlayerDb,
  setAppDb,
  setPlayerName,
  setPlayerId,
  setEconomy,
  setArenaVersion,
  setTagColors,
  editTagColor,
  setRank,
  addCard,
  addCardsFromStore,
  addCardsKeys,
  addCardsList,
  removeDeckTag,
  addDeckTag,
  setDeckTags
} = playerDataSlice.actions;
export default playerDataSlice;
