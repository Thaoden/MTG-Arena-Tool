import * as SettingsSlice from "./slices/settingsSlice";
import * as PlayerDataSlice from "./slices/playerDataSlice";
import * as AppSettingsSlice from "./slices/appSettingsSlice";
import * as RendererSlice from "./slices/rendererSlice";
import * as HoverSlice from "./slices/hoverSlice";
import * as LoginSlice from "./slices/loginSlice";
import * as HomeSlice from "./slices/homeSlice";
import * as CollectionSlice from "./slices/collectionSlice";
import * as ExploreSlice from "./slices/exploreSlice";
import * as MatchesSlice from "./slices/matchesSlice";
import * as EventsSlice from "./slices/eventsSlice";
import * as DecksSlice from "./slices/decksSlice";
import * as EconomySlice from "./slices/economySlice";
import * as DraftsSlice from "./slices/draftsSlice";
import * as SeasonalSlice from "./slices/seasonalSlice";
import * as DeckChangesSlice from "./slices/deckChangesSlice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

type SetSettingsArg = {
  type: "SET_SETTINGS";
  arg: Parameters<typeof SettingsSlice.setSettings>[0];
};

type SetAppSettingsArg = {
  type: "SET_APP_SETTINGS";
  arg: Parameters<typeof AppSettingsSlice.setAppSettings>[0];
};

type SetArchivedSettingsArg = {
  type: "SET_ARCHIVED";
  arg: Parameters<typeof RendererSlice.setArchived>[0];
};

type SetBackColorArg = {
  type: "SET_BACK_COLOR";
  arg: Parameters<typeof RendererSlice.setBackgroundColor>[0];
};

type SetBackGrpIdArg = {
  type: "SET_BACK_GRPID";
  arg: Parameters<typeof RendererSlice.setBackgroundGrpId>[0];
};

type SetBackImageArg = {
  type: "SET_BACK_IMAGE";
  arg: Parameters<typeof RendererSlice.setBackgroundImage>[0];
};

type SetLoadingArg = {
  type: "SET_LOADING";
  arg: Parameters<typeof RendererSlice.setLoading>[0];
};

type SetNoLogArg = {
  type: "SET_NO_LOG";
  arg: Parameters<typeof RendererSlice.setNoLog>[0];
};

type SetOfflineArg = {
  type: "SET_OFFLINE";
  arg: Parameters<typeof RendererSlice.setOffline>[0];
};

type SetPatreonArg = {
  type: "SET_PATREON";
  arg: Parameters<typeof RendererSlice.setPatreon>[0];
};

type SetPopupArg = {
  type: "SET_POPUP";
  arg: Parameters<typeof RendererSlice.setPopup>[0];
};

type SetShareDialogArg = {
  type: "SET_SHARE_DIALOG";
  arg: Parameters<typeof RendererSlice.setShareDialog>[0];
};

type SetShareDialogOpenArg = {
  type: "SET_SHARE_DIALOG_OPEN";
  arg: Parameters<typeof RendererSlice.setShareDialogOpen>[0];
};

type SetShareDialogUrl = {
  type: "SET_SHARE_DIALOG_URL";
  arg: Parameters<typeof RendererSlice.setShareDialogUrl>[0];
};

type SetNavIndexArg = {
  type: "SET_NAV_INDEX";
  arg: Parameters<typeof RendererSlice.setNavIndex>[0];
};

type SetSubnavArg = {
  type: "SET_SUBNAV";
  arg: Parameters<typeof RendererSlice.setSubNav>[0];
};

type SetTopArtistArg = {
  type: "SET_TOPARTIST";
  arg: Parameters<typeof RendererSlice.setTopArtist>[0];
};

type SetTopnavArg = {
  type: "SET_TOPNAV";
  arg: Parameters<typeof RendererSlice.setTopNav>[0];
};

type SetUpdateStateArg = {
  type: "SET_UPDATE_STATE";
  arg: Parameters<typeof RendererSlice.setUpdateState>[0];
};

type SetSyncStateArg = {
  type: "SET_SYNC_STATE";
  arg: Parameters<typeof RendererSlice.setSyncState>[0];
};

type SetToPushArg = {
  type: "SET_TO_PUSH";
  arg: Parameters<typeof RendererSlice.setSyncToPush>[0];
};

type SetHoverInArg = {
  type: "SET_HOVER_IN";
  arg: Parameters<typeof HoverSlice.setHoverIn>[0];
};

type SetHoverOutArg = {
  type: "SET_HOVER_OUT";
  arg: Parameters<typeof HoverSlice.setHoverOut>;
};

type SetCanLoginArg = {
  type: "SET_CAN_LOGIN";
  arg: Parameters<typeof LoginSlice.setCanLogin>[0];
};

type SetLoginEmailArg = {
  type: "SET_LOGIN_EMAIL";
  arg: Parameters<typeof LoginSlice.setLoginEmail>[0];
};

type SetLoginFormArg = {
  type: "SET_LOGIN_FORM";
  arg: Parameters<typeof LoginSlice.setLoginForm>[0];
};

type SetLoginPasswordArg = {
  type: "SET_LOGIN_PASSWORD";
  arg: Parameters<typeof LoginSlice.setLoginPassword>[0];
};

type SetLoginRememberArg = {
  type: "SET_LOGIN_REMEMBER";
  arg: Parameters<typeof LoginSlice.setLoginRemember>[0];
};

type SetLoginStateArg = {
  type: "SET_LOGIN_STATE";
  arg: Parameters<typeof LoginSlice.setLoginState>[0];
};

type SetHomeDataArg = {
  type: "SET_HOME_DATA";
  arg: Parameters<typeof HomeSlice.setHomeData>[0];
};

type SetBoosterWinFactorArg = {
  type: "SET_BOOSTER_WIN_FACTOR";
  arg: Parameters<typeof CollectionSlice.setBoosterWinFactor>[0];
};

type SetCountModeArg = {
  type: "SET_COUNT_MODE";
  arg: Parameters<typeof CollectionSlice.setCountMode>[0];
};

type SetFutureBoostersArg = {
  type: "SET_FUTURE_BOOSTERS";
  arg: Parameters<typeof CollectionSlice.setFutureBoosters>[0];
};

type SetMythicDraftFactorArg = {
  type: "SET_MYTHIC_DRAFT_FACTOR";
  arg: Parameters<typeof CollectionSlice.setMythicDraftFactor>[0];
};

type SetRareDraftFactorArg = {
  type: "SET_RARE_DRAFT_FACTOR";
  arg: Parameters<typeof CollectionSlice.setRareDraftFactor>[0];
};

type SetActiveEventsArg = {
  type: "SET_ACTIVE_EVENTS";
  arg: Parameters<typeof ExploreSlice.setActiveEvents>[0];
};

type SetExploreDataArg = {
  type: "SET_EXPLORE_DATA";
  arg: Parameters<typeof ExploreSlice.setExploreData>[0];
};

type SetExploreFiltersArg = {
  type: "SET_EXPLORE_FILTERS";
  arg: Parameters<typeof ExploreSlice.setExploreFilters>[0];
};

type SetExploreFiltersSkipArg = {
  type: "SET_EXPLORE_FILTERS_SKIP";
  arg: Parameters<typeof ExploreSlice.setExploreFiltersSkip>[0];
};

type SetMatchArg = {
  type: "SET_MATCH";
  arg: Parameters<typeof MatchesSlice.setMatch>[0];
};

type SetManyMatchesArg = {
  type: "SET_MANY_MATCHES";
  arg: Parameters<typeof MatchesSlice.setManyMatches>[0];
};

type SetEventArg = {
  type: "SET_EVENT";
  arg: Parameters<typeof EventsSlice.setEvent>[0];
};

type SetManyEventsArg = {
  type: "SET_MANY_EVENTS";
  arg: Parameters<typeof EventsSlice.setManyEvents>[0];
};

type SetPlayerDbArg = {
  type: "SET_PLAYERDB";
  arg: Parameters<typeof PlayerDataSlice.setPlayerDb>[0];
};

type SetAppdbArg = {
  type: "SET_APPDB";
  arg: Parameters<typeof PlayerDataSlice.setAppDb>[0];
};

type SetPlayerIdArg = {
  type: "SET_PLAYER_ID";
  arg: Parameters<typeof PlayerDataSlice.setPlayerId>[0];
};

type SetPlayerNameArg = {
  type: "SET_PLAYER_NAME";
  arg: Parameters<typeof PlayerDataSlice.setPlayerName>[0];
};

type SetArenaVersionArg = {
  type: "SET_ARENA_VERSION";
  arg: Parameters<typeof PlayerDataSlice.setArenaVersion>[0];
};

type SetPlayerEconomyArg = {
  type: "SET_PLAYER_ECONOMY";
  arg: Parameters<typeof PlayerDataSlice.setEconomy>[0];
};

type SetTagColorsArg = {
  type: "SET_TAG_COLORS";
  arg: Parameters<typeof PlayerDataSlice.setTagColors>[0];
};

type EditTagColorArg = {
  type: "EDIT_TAG_COLOR";
  arg: Parameters<typeof PlayerDataSlice.editTagColor>[0];
};

type SetRankArg = {
  type: "SET_RANK";
  arg: Parameters<typeof PlayerDataSlice.setRank>[0];
};

type AddCardArg = {
  type: "ADD_CARD";
  arg: Parameters<typeof PlayerDataSlice.addCard>[0];
};

type AddCardsListArg = {
  type: "ADD_CARDS_LIST";
  arg: Parameters<typeof PlayerDataSlice.addCardsList>[0];
};

type AddCardsKeysArg = {
  type: "ADD_CARDS_KEYS";
  arg: Parameters<typeof PlayerDataSlice.addCardsKeys>[0];
};

type AddCardsFromStoreArg = {
  type: "ADD_CARDS_FROM_STORE";
  arg: Parameters<typeof PlayerDataSlice.addCardsFromStore>[0];
};

type RemoveDeckTagArg = {
  type: "REMOVE_DECK_TAG";
  arg: Parameters<typeof PlayerDataSlice.removeDeckTag>[0];
};

type AddDeckTagArg = {
  type: "ADD_DECK_TAG";
  arg: Parameters<typeof PlayerDataSlice.addDeckTag>[0];
};

type SetDeckTagsArg = {
  type: "SET_DECK_TAGS";
  arg: Parameters<typeof PlayerDataSlice.setDeckTags>[0];
};

type SetDeckArg = {
  type: "SET_DECK";
  arg: Parameters<typeof DecksSlice.setDeck>[0];
};

type SetManyDecksArg = {
  type: "SET_MANY_DECKS";
  arg: Parameters<typeof DecksSlice.setManyDecks>[0];
};

type SetManyStaticDecksArg = {
  type: "SET_MANY_STATIC_DECKS";
  arg: Parameters<typeof DecksSlice.setManyStaticDecks>[0];
};

type SetEconomyArg = {
  type: "SET_ECONOMY";
  arg: Parameters<typeof EconomySlice.setEconomy>[0];
};

type SetManyEconomyArg = {
  type: "SET_MANY_ECONOMY";
  arg: Parameters<typeof EconomySlice.setManyEconomy>[0];
};

type SetDraftArg = {
  type: "SET_DRAFT";
  arg: Parameters<typeof DraftsSlice.setDraft>[0];
};

type SetManyDraftArg = {
  type: "SET_MANY_DRAFT";
  arg: Parameters<typeof DraftsSlice.setManyDrafts>[0];
};

type SetSeasonalArg = {
  type: "SET_SEASONAL";
  arg: Parameters<typeof SeasonalSlice.setSeasonal>[0];
};

type SetManySeasonalArg = {
  type: "SET_MANY_SEASONAL";
  arg: Parameters<typeof SeasonalSlice.setManySeasonal>[0];
};

type SetDeckChangeArg = {
  type: "SET_DECK_CHANGE";
  arg: Parameters<typeof DeckChangesSlice.setChange>[0];
};

type SetManyDeckChangesArg = {
  type: "SET_MANY_DECK_CHANGES";
  arg: Parameters<typeof DeckChangesSlice.setManyChanges>[0];
};

export type ActionsArg =
  | SetSettingsArg
  | SetAppSettingsArg
  | SetArchivedSettingsArg
  | SetBackColorArg
  | SetBackGrpIdArg
  | SetBackImageArg
  | SetLoadingArg
  | SetNoLogArg
  | SetOfflineArg
  | SetPatreonArg
  | SetPopupArg
  | SetShareDialogArg
  | SetShareDialogOpenArg
  | SetShareDialogUrl
  | SetNavIndexArg
  | SetSubnavArg
  | SetTopnavArg
  | SetTopArtistArg
  | SetUpdateStateArg
  | SetSyncStateArg
  | SetToPushArg
  | SetHoverInArg
  | SetHoverOutArg
  | SetCanLoginArg
  | SetLoginEmailArg
  | SetLoginFormArg
  | SetLoginPasswordArg
  | SetLoginRememberArg
  | SetLoginStateArg
  | SetHomeDataArg
  | SetBoosterWinFactorArg
  | SetCountModeArg
  | SetFutureBoostersArg
  | SetMythicDraftFactorArg
  | SetRareDraftFactorArg
  | SetActiveEventsArg
  | SetExploreDataArg
  | SetExploreFiltersArg
  | SetExploreFiltersSkipArg
  | SetMatchArg
  | SetManyMatchesArg
  | SetEventArg
  | SetManyEventsArg
  | SetPlayerDbArg
  | SetAppdbArg
  | SetPlayerIdArg
  | SetPlayerNameArg
  | SetArenaVersionArg
  | SetPlayerEconomyArg
  | SetTagColorsArg
  | SetRankArg
  | AddCardArg
  | AddCardsListArg
  | AddCardsKeysArg
  | AddCardsFromStoreArg
  | RemoveDeckTagArg
  | AddDeckTagArg
  | SetDeckTagsArg
  | SetDeckArg
  | SetManyDecksArg
  | SetManyStaticDecksArg
  | SetEconomyArg
  | SetManyEconomyArg
  | SetDraftArg
  | SetManyDraftArg
  | SetSeasonalArg
  | SetManySeasonalArg
  | SetDeckChangeArg
  | SetManyDeckChangesArg
  | EditTagColorArg;

export type Actions = ActionsArg["type"];

const actions: Record<
  Actions,
  ActionCreatorWithPayload<any, string> //<P, T> where P is the type of the payload and T the type of the Action
> = {
  SET_SETTINGS: SettingsSlice.setSettings,
  SET_APP_SETTINGS: AppSettingsSlice.setAppSettings,
  SET_ARCHIVED: RendererSlice.setArchived,
  SET_BACK_COLOR: RendererSlice.setBackgroundColor,
  SET_BACK_GRPID: RendererSlice.setBackgroundGrpId,
  SET_BACK_IMAGE: RendererSlice.setBackgroundImage,
  SET_LOADING: RendererSlice.setLoading,
  SET_NO_LOG: RendererSlice.setNoLog,
  SET_OFFLINE: RendererSlice.setOffline,
  SET_PATREON: RendererSlice.setPatreon,
  SET_POPUP: RendererSlice.setPopup,
  SET_SHARE_DIALOG: RendererSlice.setShareDialog,
  SET_SHARE_DIALOG_OPEN: RendererSlice.setShareDialogOpen,
  SET_SHARE_DIALOG_URL: RendererSlice.setShareDialogUrl,
  SET_NAV_INDEX: RendererSlice.setNavIndex,
  SET_SUBNAV: RendererSlice.setSubNav,
  SET_TOPARTIST: RendererSlice.setTopArtist,
  SET_TOPNAV: RendererSlice.setTopNav,
  SET_UPDATE_STATE: RendererSlice.setUpdateState,
  SET_SYNC_STATE: RendererSlice.setSyncState,
  SET_TO_PUSH: RendererSlice.setSyncToPush,
  SET_HOVER_IN: HoverSlice.setHoverIn,
  SET_HOVER_OUT: HoverSlice.setHoverOut,
  SET_CAN_LOGIN: LoginSlice.setCanLogin,
  SET_LOGIN_EMAIL: LoginSlice.setLoginEmail,
  SET_LOGIN_FORM: LoginSlice.setLoginForm,
  SET_LOGIN_PASSWORD: LoginSlice.setLoginPassword,
  SET_LOGIN_REMEMBER: LoginSlice.setLoginRemember,
  SET_LOGIN_STATE: LoginSlice.setLoginState,
  SET_HOME_DATA: HomeSlice.setHomeData,
  SET_BOOSTER_WIN_FACTOR: CollectionSlice.setBoosterWinFactor,
  SET_COUNT_MODE: CollectionSlice.setCountMode,
  SET_FUTURE_BOOSTERS: CollectionSlice.setFutureBoosters,
  SET_MYTHIC_DRAFT_FACTOR: CollectionSlice.setMythicDraftFactor,
  SET_RARE_DRAFT_FACTOR: CollectionSlice.setRareDraftFactor,
  SET_ACTIVE_EVENTS: ExploreSlice.setActiveEvents,
  SET_EXPLORE_DATA: ExploreSlice.setExploreData,
  SET_EXPLORE_FILTERS: ExploreSlice.setExploreFilters,
  SET_EXPLORE_FILTERS_SKIP: ExploreSlice.setExploreFiltersSkip,
  SET_MATCH: MatchesSlice.setMatch,
  SET_MANY_MATCHES: MatchesSlice.setManyMatches,
  SET_EVENT: EventsSlice.setEvent,
  SET_MANY_EVENTS: EventsSlice.setManyEvents,
  SET_PLAYERDB: PlayerDataSlice.setPlayerDb,
  SET_APPDB: PlayerDataSlice.setAppDb,
  SET_PLAYER_ID: PlayerDataSlice.setPlayerId,
  SET_PLAYER_NAME: PlayerDataSlice.setPlayerName,
  SET_ARENA_VERSION: PlayerDataSlice.setArenaVersion,
  SET_PLAYER_ECONOMY: PlayerDataSlice.setEconomy,
  SET_TAG_COLORS: PlayerDataSlice.setTagColors,
  EDIT_TAG_COLOR: PlayerDataSlice.editTagColor,
  SET_RANK: PlayerDataSlice.setRank,
  ADD_CARD: PlayerDataSlice.addCard,
  ADD_CARDS_LIST: PlayerDataSlice.addCardsList,
  ADD_CARDS_KEYS: PlayerDataSlice.addCardsKeys,
  ADD_CARDS_FROM_STORE: PlayerDataSlice.addCardsFromStore,
  REMOVE_DECK_TAG: PlayerDataSlice.removeDeckTag,
  ADD_DECK_TAG: PlayerDataSlice.addDeckTag,
  SET_DECK_TAGS: PlayerDataSlice.setDeckTags,
  SET_DECK: DecksSlice.setDeck,
  SET_MANY_DECKS: DecksSlice.setManyDecks,
  SET_MANY_STATIC_DECKS: DecksSlice.setManyStaticDecks,
  SET_ECONOMY: EconomySlice.setEconomy,
  SET_MANY_ECONOMY: EconomySlice.setManyEconomy,
  SET_DRAFT: DraftsSlice.setDraft,
  SET_MANY_DRAFT: DraftsSlice.setManyDrafts,
  SET_SEASONAL: SeasonalSlice.setSeasonal,
  SET_MANY_SEASONAL: SeasonalSlice.setManySeasonal,
  SET_DECK_CHANGE: DeckChangesSlice.setChange,
  SET_MANY_DECK_CHANGES: DeckChangesSlice.setManyChangees
};

export default actions;
