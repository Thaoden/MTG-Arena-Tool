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
