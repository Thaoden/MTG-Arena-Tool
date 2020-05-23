import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";

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

const rendererSlice = createSlice<
  RendererState,
  SliceCaseReducers<RendererState>
>({
  name: "renderer",
  initialState: initialRendererState,
  reducers: {
    setBackgroundColor: (state: RendererState, action): void => {
      state.backgroundColor = action.payload;
    },
    setBackgroundGrpId: (state: RendererState, action): void => {
      state.backgroundGrpId = action.payload;
    },
    setBackgroundImage: (state: RendererState, action): void => {
      state.backgroundImage = action.payload;
    },
    setLoading: (state: RendererState, action): void => {
      state.loading = action.payload;
    },
    setNoLog: (state: RendererState, action): void => {
      state.noLog = action.payload;
    },
    setOffline: (state: RendererState, action): void => {
      state.offline = action.payload;
    },
    setPatreon: (state: RendererState, action): void => {
      state.patreon = action.payload;
    },
    setPopup: (state: RendererState, action): void => {
      state.popup = action.payload;
    },
    setShareDialog: (state: RendererState, action): void => {
      state.shareDialog = action.payload;
      state.shareDialog.open = true;
    },
    setShareDialogOpen: (state: RendererState, action): void => {
      state.shareDialog.open = action.payload;
    },
    setShareDialogUrl: (state: RendererState, action): void => {
      state.shareDialog.url = action.payload;
    },
    setSubNav: (state: RendererState, action): void => {
      if (action.payload.type == -1) {
        state.navIndex = 0;
      } else {
        state.navIndex = 1;
      }
      state.subNav = action.payload;
    },
    setTopArtist: (state: RendererState, action): void => {
      state.topArtist = action.payload;
    },
    setTopNav: (state: RendererState, action): void => {
      state.navIndex = 0;
      state.topNav = action.payload;
    },
    setNavIndex: (state: RendererState, action): void => {
      state.navIndex = action.payload;
    },
    setUpdateState: (state: RendererState, action): void => {
      state.updateState = action.payload;
    },
    setArchived: (state: RendererState, action): void => {
      const { id, archived } = action.payload;
      if (!id) return;
      // update local cache (avoids round trip)
      state.archivedCache[id] = !!archived;
    },
    setSyncState: (state: RendererState, action): void => {
      state.syncState = action.payload;
    },
    setSyncToPush: (state: RendererState, action): void => {
      Object.assign(state.syncToPush, action.payload);
    }
  }
});

export default rendererSlice;
