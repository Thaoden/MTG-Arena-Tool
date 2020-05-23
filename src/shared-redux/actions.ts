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
import { InternalMatch } from "../types/match";
import { InternalEvent } from "../types/event";
import { InternalDeck, DeckChange } from "../types/Deck";
import { InternalEconomyTransaction } from "../types/inventory";
import { InternalDraft } from "../types/draft";
import { SeasonalRankData } from "../types/Season";

type SetSettingsArg = {
  type: "SET_SETTINGS";
  arg: SettingsSlice.Settings;
};

type SetAppSettingsArg = {
  type: "SET_APP_SETTINGS";
  arg: AppSettingsSlice.AppSettings;
};

type SetArchivedSettingsArg = {
  type: "SET_ARCHIVED";
  arg: { id: string; archived: boolean };
};

type SetBackColorArg = {
  type: "SET_BACK_COLOR";
  arg: string;
};

type SetBackGrpIdArg = {
  type: "SET_BACK_GRPID";
  arg: number;
};

type SetBackImageArg = {
  type: "SET_BACK_IMAGE";
  arg: string;
};

type SetLoadingArg = {
  type: "SET_LOADING";
  arg: boolean;
};

type SetNoLogArg = {
  type: "SET_NO_LOG";
  arg: boolean;
};

type SetOfflineArg = {
  type: "SET_OFFLINE";
  arg: boolean;
};

type SetPatreonArg = {
  type: "SET_PATREON";
  arg: RendererSlice.RendererState["patreon"];
};

type SetPopupArg = {
  type: "SET_POPUP";
  arg: RendererSlice.RendererState["popup"];
};

type SetShareDialogArg = {
  type: "SET_SHARE_DIALOG";
  arg: RendererSlice.RendererState["shareDialog"];
};

type SetShareDialogOpenArg = {
  type: "SET_SHARE_DIALOG_OPEN";
  arg: boolean;
};

type SetShareDialogUrl = {
  type: "SET_SHARE_DIALOG_URL";
  arg: string;
};

type SetNavIndexArg = {
  type: "SET_NAV_INDEX";
  arg: number;
};

type SetSubnavArg = {
  type: "SET_SUBNAV";
  arg: RendererSlice.RendererState["subNav"];
};

type SetTopArtistArg = {
  type: "SET_TOPARTIST";
  arg: string;
};

type SetTopnavArg = {
  type: "SET_TOPNAV";
  arg: number;
};

type SetUpdateStateArg = {
  type: "SET_UPDATE_STATE";
  arg: string;
};

type SetSyncStateArg = {
  type: "SET_SYNC_STATE";
  arg: number;
};

type SetToPushArg = {
  type: "SET_TO_PUSH";
  arg: RendererSlice.RendererState["syncToPush"];
};

type SetHoverInArg = {
  type: "SET_HOVER_IN";
  arg: { grpId: number; wanted: number };
};

type SetHoverOutArg = {
  type: "SET_HOVER_OUT";
  arg: never;
};

type SetCanLoginArg = {
  type: "SET_CAN_LOGIN";
  arg: boolean;
};

type SetLoginEmailArg = {
  type: "SET_LOGIN_EMAIL";
  arg: string;
};

type SetLoginFormArg = {
  type: "SET_LOGIN_FORM";
  arg: LoginSlice.Login["loginForm"];
};

type SetLoginPasswordArg = {
  type: "SET_LOGIN_PASSWORD";
  arg: string;
};

type SetLoginRememberArg = {
  type: "SET_LOGIN_REMEMBER";
  arg: boolean;
};

type SetLoginStateArg = {
  type: "SET_LOGIN_STATE";
  arg: 1 | 2 | 3 | 4;
};

type SetHomeDataArg = {
  type: "SET_HOME_DATA";
  arg: HomeSlice.Home;
};

type SetBoosterWinFactorArg = {
  type: "SET_BOOSTER_WIN_FACTOR";
  arg: number;
};

type SetCountModeArg = {
  type: "SET_COUNT_MODE";
  arg: string;
};

type SetFutureBoostersArg = {
  type: "SET_FUTURE_BOOSTERS";
  arg: number;
};

type SetMythicDraftFactorArg = {
  type: "SET_MYTHIC_DRAFT_FACTOR";
  arg: number;
};

type SetRareDraftFactorArg = {
  type: "SET_RARE_DRAFT_FACTOR";
  arg: number;
};

type SetActiveEventsArg = {
  type: "SET_ACTIVE_EVENTS";
  arg: string;
};

type SetExploreDataArg = {
  type: "SET_EXPLORE_DATA";
  arg: ExploreSlice.Explore["data"];
};

type SetExploreFiltersArg = {
  type: "SET_EXPLORE_FILTERS";
  arg: ExploreSlice.ExploreQuery;
};

type SetExploreFiltersSkipArg = {
  type: "SET_EXPLORE_FILTERS_SKIP";
  arg: number;
};

type SetMatchArg = {
  type: "SET_MATCH";
  arg: InternalMatch;
};

type SetManyMatchesArg = {
  type: "SET_MANY_MATCHES";
  arg: InternalMatch[];
};

type SetEventArg = {
  type: "SET_EVENT";
  arg: InternalEvent;
};

type SetManyEventsArg = {
  type: "SET_MANY_EVENTS";
  arg: InternalEvent[];
};

type SetPlayerDbArg = {
  type: "SET_PLAYERDB";
  arg: string;
};

type SetAppdbArg = {
  type: "SET_APPDB";
  arg: string;
};

type SetPlayerIdArg = {
  type: "SET_PLAYER_ID";
  arg: string;
};

type SetPlayerNameArg = {
  type: "SET_PLAYER_NAME";
  arg: string;
};

type SetArenaVersionArg = {
  type: "SET_ARENA_VERSION";
  arg: string;
};

type SetPlayerEconomyArg = {
  type: "SET_PLAYER_ECONOMY";
  arg: PlayerDataSlice.PlayerData["economy"];
};

type SetTagColorsArg = {
  type: "SET_TAG_COLORS";
  arg: Record<string, string>;
};

type EditTagColorArg = {
  type: "EDIT_TAG_COLOR";
  arg: { tag: string; color: string };
};

type SetRankArg = {
  type: "SET_RANK";
  arg: PlayerDataSlice.PlayerData["rank"];
};

type AddCardArg = {
  type: "ADD_CARD";
  arg: number;
};

type AddCardsListArg = {
  type: "ADD_CARDS_LIST";
  arg: number[];
};

type AddCardsKeysArg = {
  type: "ADD_CARDS_KEYS";
  arg: { [grpId: string]: number };
};

type AddCardsFromStoreArg = {
  type: "ADD_CARDS_FROM_STORE";
  arg: any;
};

type RemoveDeckTagArg = {
  type: "REMOVE_DECK_TAG";
  arg: { tag: string; deck: string };
};

type AddDeckTagArg = {
  type: "ADD_DECK_TAG";
  arg: { tag: string; deck: string };
};

type SetDeckTagsArg = {
  type: "SET_DECK_TAGS";
  arg: Record<string, string[]>;
};

type SetDeckArg = {
  type: "SET_DECK";
  arg: InternalDeck;
};

type SetManyDecksArg = {
  type: "SET_MANY_DECKS";
  arg: InternalDeck[];
};

type SetManyStaticDecksArg = {
  type: "SET_MANY_STATIC_DECKS";
  arg: InternalDeck[];
};

type SetEconomyArg = {
  type: "SET_ECONOMY";
  arg: InternalEconomyTransaction;
};

type SetManyEconomyArg = {
  type: "SET_MANY_ECONOMY";
  arg: InternalEconomyTransaction[];
};

type SetDraftArg = {
  type: "SET_DRAFT";
  arg: InternalDraft;
};

type SetManyDraftArg = {
  type: "SET_MANY_DRAFT";
  arg: InternalDraft[];
};

type SetSeasonalArg = {
  type: "SET_SEASONAL";
  arg: SeasonalRankData;
};

type SetManySeasonalArg = {
  type: "SET_MANY_SEASONAL";
  arg: SeasonalRankData[];
};

type SetDeckChangeArg = {
  type: "SET_DECK_CHANGE";
  arg: DeckChange;
};

type SetManyDeckChangesArg = {
  type: "SET_MANY_DECK_CHANGES";
  arg: DeckChange[];
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
