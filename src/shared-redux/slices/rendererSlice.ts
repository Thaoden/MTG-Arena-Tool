import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialRendererState = {
  archivedCache: {} as Record<string, boolean>,
  backgroundColor: "rgba(0, 0, 0, 0.25)",
  backgroundGrpId: 0,
  backgroundImage: "default",
  loading: false,
  noLog: false,
  offline: false,
  patreon: {
    patreon: false,
    patreonTier: -1
  },
  syncState: 0,
  syncToPush: {
    courses: [] as string[],
    matches: [] as string[],
    drafts: [] as string[],
    economy: [] as string[],
    seasonal: [] as string[]
  },
  popup: {
    text: "",
    time: 0,
    duration: 0
  },
  shareDialog: {
    open: false,
    url: "",
    type: "",
    data: "",
    id: ""
  },
  subNav: {
    type: -1,
    id: "",
    data: {} as {
      mainDeck: any;
      sideboard: any;
      deckTileId: any;
      name: any;
      id: any;
    }
  },
  topArtist: "Bedevil by Seb McKinnon",
  topNav: 0,
  navIndex: 0,
  updateState: ""
};

type RendererState = typeof initialRendererState;

const _setBackgroundColor = (
  state: RendererState,
  action: PayloadAction<string>
): void => {
  state.backgroundColor = action.payload;
};

const _setBackgroundGrpId = (
  state: RendererState,
  action: PayloadAction<number>
): void => {
  state.backgroundGrpId = action.payload;
};

const _setBackgroundImage = (
  state: RendererState,
  action: PayloadAction<string>
): void => {
  state.backgroundImage = action.payload;
};

const _setLoading = (
  state: RendererState,
  action: PayloadAction<boolean>
): void => {
  state.loading = action.payload;
};

const _setNoLog = (
  state: RendererState,
  action: PayloadAction<boolean>
): void => {
  state.noLog = action.payload;
};

const _setOffline = (
  state: RendererState,
  action: PayloadAction<boolean>
): void => {
  state.offline = action.payload;
};

const _setPatreon = (
  state: RendererState,
  action: PayloadAction<RendererState["patreon"]>
): void => {
  state.patreon = action.payload;
};

const _setPopup = (
  state: RendererState,
  action: PayloadAction<RendererState["popup"]>
): void => {
  state.popup = action.payload;
};

const _setShareDialog = (
  state: RendererState,
  action: PayloadAction<RendererState["shareDialog"]>
): void => {
  state.shareDialog = action.payload;
  state.shareDialog.open = true;
};

const _setShareDialogOpen = (
  state: RendererState,
  action: PayloadAction<boolean>
): void => {
  state.shareDialog.open = action.payload;
};

const _setShareDialogUrl = (
  state: RendererState,
  action: PayloadAction<string>
): void => {
  state.shareDialog.url = action.payload;
};

const _setSubNav = (
  state: RendererState,
  action: PayloadAction<typeof initialRendererState.subNav>
): void => {
  if (action.payload.type == -1) {
    state.navIndex = 0;
  } else {
    state.navIndex = 1;
  }
  state.subNav = action.payload;
};

const _setTopArtist = (
  state: RendererState,
  action: PayloadAction<string>
): void => {
  state.topArtist = action.payload;
};

const _setTopNav = (
  state: RendererState,
  action: PayloadAction<number>
): void => {
  state.navIndex = 0;
  state.topNav = action.payload;
};

const _setNavIndex = (
  state: RendererState,
  action: PayloadAction<typeof initialRendererState.navIndex>
): void => {
  state.navIndex = action.payload;
};

const _setUpdateState = (
  state: RendererState,
  action: PayloadAction<string>
): void => {
  state.updateState = action.payload;
};

const _setArchived = (
  state: RendererState,
  action: PayloadAction<{ id: string; archived: boolean }>
): void => {
  const { id, archived } = action.payload;
  if (!id) return;
  // update local cache (avoids round trip)
  state.archivedCache[id] = !!archived;
};

const _setSyncState = (
  state: RendererState,
  action: PayloadAction<number>
): void => {
  state.syncState = action.payload;
};

const _setSyncToPush = (
  state: RendererState,
  action: PayloadAction<typeof initialRendererState.syncToPush>
): void => {
  state.syncToPush = { ...action.payload };
};

type SetBackColorArg = {
  type: "SET_BACK_COLOR";
  arg: Parameters<typeof _setBackgroundColor>[1]["payload"];
};
type SetBackGrpIdArg = {
  type: "SET_BACK_GRPID";
  arg: Parameters<typeof _setBackgroundGrpId>[1]["payload"];
};
type SetBackImageArg = {
  type: "SET_BACK_IMAGE";
  arg: Parameters<typeof _setBackgroundImage>[1]["payload"];
};
type SetLoadingArg = {
  type: "SET_LOADING";
  arg: Parameters<typeof _setLoading>[1]["payload"];
};
type SetNoLogArg = {
  type: "SET_NO_LOG";
  arg: Parameters<typeof _setNoLog>[1]["payload"];
};
type SetOfflineArg = {
  type: "SET_OFFLINE";
  arg: Parameters<typeof _setOffline>[1]["payload"];
};
type SetPatreonArg = {
  type: "SET_PATREON";
  arg: Parameters<typeof _setPatreon>[1]["payload"];
};
type SetPopupArg = {
  type: "SET_POPUP";
  arg: Parameters<typeof _setPopup>[1]["payload"];
};
type SetShareDialogArg = {
  type: "SET_SHARE_DIALOG";
  arg: Parameters<typeof _setShareDialog>[1]["payload"];
};
type SetShareDialogOpenArg = {
  type: "SET_SHARE_DIALOG_OPEN";
  arg: Parameters<typeof _setShareDialogOpen>[1]["payload"];
};
type SetShareDialogUrlArg = {
  type: "SET_SHARE_DIALOG_URL";
  arg: Parameters<typeof _setShareDialogUrl>[1]["payload"];
};
type SetSubnavArg = {
  type: "SET_SUBNAV";
  arg: Parameters<typeof _setSubNav>[1]["payload"];
};
type SetTopArtistArg = {
  type: "SET_TOPARTIST";
  arg: Parameters<typeof _setTopArtist>[1]["payload"];
};
type SetTopnavArg = {
  type: "SET_TOPNAV";
  arg: Parameters<typeof _setTopNav>[1]["payload"];
};
type SetNavIndexArg = {
  type: "SET_NAV_INDEX";
  arg: Parameters<typeof _setNavIndex>[1]["payload"];
};
type SetUpdateStateArg = {
  type: "SET_UPDATE_STATE";
  arg: Parameters<typeof _setUpdateState>[1]["payload"];
};
type SetArchivedSettingsArg = {
  type: "SET_ARCHIVED";
  arg: Parameters<typeof _setArchived>[1]["payload"];
};
type SetSyncStateArg = {
  type: "SET_SYNC_STATE";
  arg: Parameters<typeof _setSyncState>[1]["payload"];
};
type SetToPushArg = {
  type: "SET_TO_PUSH";
  arg: Parameters<typeof _setSyncToPush>[1]["payload"];
};

export type RendererReducerArgs =
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
  | SetShareDialogUrlArg
  | SetSubnavArg
  | SetTopArtistArg
  | SetTopnavArg
  | SetNavIndexArg
  | SetUpdateStateArg
  | SetArchivedSettingsArg
  | SetSyncStateArg
  | SetToPushArg;

const rendererSlice = createSlice({
  name: "renderer",
  initialState: initialRendererState,
  reducers: {
    setBackgroundColor: _setBackgroundColor,
    setBackgroundGrpId: _setBackgroundGrpId,
    setBackgroundImage: _setBackgroundImage,
    setLoading: _setLoading,
    setNoLog: _setNoLog,
    setOffline: _setOffline,
    setPatreon: _setPatreon,
    setPopup: _setPopup,
    setShareDialog: _setShareDialog,
    setShareDialogOpen: _setShareDialogOpen,
    setShareDialogUrl: _setShareDialogUrl,
    setSubNav: _setSubNav,
    setTopArtist: _setTopArtist,
    setTopNav: _setTopNav,
    setNavIndex: _setNavIndex,
    setUpdateState: _setUpdateState,
    setArchived: _setArchived,
    setSyncState: _setSyncState,
    setSyncToPush: _setSyncToPush
  }
});

export const {
  setBackgroundColor,
  setBackgroundGrpId,
  setBackgroundImage,
  setLoading,
  setNoLog,
  setOffline,
  setPatreon,
  setPopup,
  setArchived,
  setShareDialog,
  setShareDialogOpen,
  setShareDialogUrl,
  setNavIndex,
  setSubNav,
  setTopNav,
  setTopArtist,
  setUpdateState,
  setSyncState,
  setSyncToPush
} = rendererSlice.actions;

export default rendererSlice;
