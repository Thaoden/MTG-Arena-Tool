import settingsSlice from "./slices/settingsSlice";
import playerDataSlice from "./slices/playerDataSlice";
import appSettingsSlice from "./slices/appSettingsSlice";
import rendererSlice from "./slices/rendererSlice";
import hoverSlice from "./slices/hoverSlice";
import loginSlice from "./slices/loginSlice";
import homeSlice from "./slices/homeSlice";
import collectionSlice from "./slices/collectionSlice";
import exploreSlice from "./slices/exploreSlice";
import matchesSlice from "./slices/matchesSlice";
import eventsSlice from "./slices/eventsSlice";
import decksSlice from "./slices/decksSlice";
import economySlice from "./slices/economySlice";
import draftsSlice from "./slices/draftsSlice";
import seasonalSlice from "./slices/seasonalSlice";
import deckChangesSlice from "./slices/deckChangesSlice";
import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload
} from "@reduxjs/toolkit";

export type Actions =
  | "SET_SETTINGS"
  | "SET_APP_SETTINGS"
  | "SET_ARCHIVED"
  | "SET_BACK_COLOR"
  | "SET_BACK_GRPID"
  | "SET_BACK_IMAGE"
  | "SET_LOADING"
  | "SET_NO_LOG"
  | "SET_OFFLINE"
  | "SET_PATREON"
  | "SET_POPUP"
  | "SET_SHARE_DIALOG"
  | "SET_SHARE_DIALOG_OPEN"
  | "SET_SHARE_DIALOG_URL"
  | "SET_NAV_INDEX"
  | "SET_SUBNAV"
  | "SET_TOPARTIST"
  | "SET_TOPNAV"
  | "SET_UPDATE_STATE"
  | "SET_SYNC_STATE"
  | "SET_TO_PUSH"
  | "SET_HOVER_IN"
  | "SET_HOVER_OUT"
  | "SET_CAN_LOGIN"
  | "SET_LOGIN_EMAIL"
  | "SET_LOGIN_FORM"
  | "SET_LOGIN_PASSWORD"
  | "SET_LOGIN_REMEMBER"
  | "SET_LOGIN_STATE"
  | "SET_HOME_DATA"
  | "SET_BOOSTER_WIN_FACTOR"
  | "SET_COUNT_MODE"
  | "SET_FUTURE_BOOSTERS"
  | "SET_MYTHIC_DRAFT_FACTOR"
  | "SET_RARE_DRAFT_FACTOR"
  | "SET_ACTIVE_EVENTS"
  | "SET_EXPLORE_DATA"
  | "SET_EXPLORE_FILTERS"
  | "SET_EXPLORE_FILTERS_SKIP"
  | "SET_MATCH"
  | "SET_MANY_MATCHES"
  | "SET_EVENT"
  | "SET_MANY_EVENTS"
  | "SET_PLAYERDB"
  | "SET_APPDB"
  | "SET_PLAYER_ID"
  | "SET_PLAYER_NAME"
  | "SET_ARENA_VERSION"
  | "SET_PLAYER_ECONOMY"
  | "SET_TAG_COLORS"
  | "EDIT_TAG_COLOR"
  | "SET_RANK"
  | "ADD_CARD"
  | "ADD_CARDS_LIST"
  | "ADD_CARDS_KEYS"
  | "ADD_CARDS_FROM_STORE"
  | "REMOVE_DECK_TAG"
  | "ADD_DECK_TAG"
  | "SET_DECK_TAGS"
  | "SET_DECK"
  | "SET_MANY_DECKS"
  | "SET_MANY_STATIC_DECKS"
  | "SET_ECONOMY"
  | "SET_MANY_ECONOMY"
  | "SET_DRAFT"
  | "SET_MANY_DRAFT"
  | "SET_SEASONAL"
  | "SET_MANY_SEASONAL"
  | "SET_DECK_CHANGE"
  | "SET_MANY_DECK_CHANGES";

const actions: Record<
  Actions,
  ActionCreatorWithPayload<any | string> | ActionCreatorWithoutPayload<string>
> = {
  SET_SETTINGS: settingsSlice.actions.setSettings,
  SET_APP_SETTINGS: appSettingsSlice.actions.setAppSettings,
  SET_ARCHIVED: rendererSlice.actions.setArchived,
  SET_BACK_COLOR: rendererSlice.actions.setBackgroundColor,
  SET_BACK_GRPID: rendererSlice.actions.setBackgroundGrpId,
  SET_BACK_IMAGE: rendererSlice.actions.setBackgroundImage,
  SET_LOADING: rendererSlice.actions.setLoading,
  SET_NO_LOG: rendererSlice.actions.setNoLog,
  SET_OFFLINE: rendererSlice.actions.setOffline,
  SET_PATREON: rendererSlice.actions.setPatreon,
  SET_POPUP: rendererSlice.actions.setPopup,
  SET_SHARE_DIALOG: rendererSlice.actions.setShareDialog,
  SET_SHARE_DIALOG_OPEN: rendererSlice.actions.setShareDialogOpen,
  SET_SHARE_DIALOG_URL: rendererSlice.actions.setShareDialogUrl,
  SET_NAV_INDEX: rendererSlice.actions.setNavIndex,
  SET_SUBNAV: rendererSlice.actions.setSubNav,
  SET_TOPARTIST: rendererSlice.actions.setTopArtist,
  SET_TOPNAV: rendererSlice.actions.setTopNav,
  SET_UPDATE_STATE: rendererSlice.actions.setUpdateState,
  SET_SYNC_STATE: rendererSlice.actions.setSyncState,
  SET_TO_PUSH: rendererSlice.actions.setSyncToPush,
  SET_HOVER_IN: hoverSlice.actions.setHoverIn,
  SET_HOVER_OUT: hoverSlice.actions.setHoverOut,
  SET_CAN_LOGIN: loginSlice.actions.setCanLogin,
  SET_LOGIN_EMAIL: loginSlice.actions.setLoginEmail,
  SET_LOGIN_FORM: loginSlice.actions.setLoginForm,
  SET_LOGIN_PASSWORD: loginSlice.actions.setLoginPassword,
  SET_LOGIN_REMEMBER: loginSlice.actions.setLoginRemember,
  SET_LOGIN_STATE: loginSlice.actions.setLoginState,
  SET_HOME_DATA: homeSlice.actions.setHomeData,
  SET_BOOSTER_WIN_FACTOR: collectionSlice.actions.setBoosterWinFactor,
  SET_COUNT_MODE: collectionSlice.actions.setCountMode,
  SET_FUTURE_BOOSTERS: collectionSlice.actions.setFutureBoosters,
  SET_MYTHIC_DRAFT_FACTOR: collectionSlice.actions.setMythicDraftFactor,
  SET_RARE_DRAFT_FACTOR: collectionSlice.actions.setRareDraftFactor,
  SET_ACTIVE_EVENTS: exploreSlice.actions.setActiveEvents,
  SET_EXPLORE_DATA: exploreSlice.actions.setExploreData,
  SET_EXPLORE_FILTERS: exploreSlice.actions.setExploreFilters,
  SET_EXPLORE_FILTERS_SKIP: exploreSlice.actions.setExploreFiltersSkip,
  SET_MATCH: matchesSlice.actions.setMatch,
  SET_MANY_MATCHES: matchesSlice.actions.setManyMatches,
  SET_EVENT: eventsSlice.actions.setEvent,
  SET_MANY_EVENTS: eventsSlice.actions.setManyEvents,
  SET_PLAYERDB: playerDataSlice.actions.setPlayerDb,
  SET_APPDB: playerDataSlice.actions.setAppDb,
  SET_PLAYER_ID: playerDataSlice.actions.setPlayerId,
  SET_PLAYER_NAME: playerDataSlice.actions.setPlayerName,
  SET_ARENA_VERSION: playerDataSlice.actions.setArenaVersion,
  SET_PLAYER_ECONOMY: playerDataSlice.actions.setEconomy,
  SET_TAG_COLORS: playerDataSlice.actions.setTagColors,
  EDIT_TAG_COLOR: playerDataSlice.actions.editTagColor,
  SET_RANK: playerDataSlice.actions.setRank,
  ADD_CARD: playerDataSlice.actions.addCard,
  ADD_CARDS_LIST: playerDataSlice.actions.addCardsList,
  ADD_CARDS_KEYS: playerDataSlice.actions.addCardsKeys,
  ADD_CARDS_FROM_STORE: playerDataSlice.actions.addCardsFromStore,
  REMOVE_DECK_TAG: playerDataSlice.actions.removeDeckTag,
  ADD_DECK_TAG: playerDataSlice.actions.addDeckTag,
  SET_DECK_TAGS: playerDataSlice.actions.setDeckTags,
  SET_DECK: decksSlice.actions.setDeck,
  SET_MANY_DECKS: decksSlice.actions.setManyDecks,
  SET_MANY_STATIC_DECKS: decksSlice.actions.setManyStaticDecks,
  SET_ECONOMY: economySlice.actions.setEconomy,
  SET_MANY_ECONOMY: economySlice.actions.setManyEconomy,
  SET_DRAFT: draftsSlice.actions.setDraft,
  SET_MANY_DRAFT: draftsSlice.actions.setManyDrafts,
  SET_SEASONAL: seasonalSlice.actions.setSeasonal,
  SET_MANY_SEASONAL: seasonalSlice.actions.setManySeasonal,
  SET_DECK_CHANGE: deckChangesSlice.actions.setChange,
  SET_MANY_DECK_CHANGES: deckChangesSlice.actions.setManyChangees
};

export default actions;
