import {
  createSlice,
  SliceCaseReducers,
  PayloadAction
} from "@reduxjs/toolkit";

const initialAppSettings = {
  email: "",
  token: "",
  toolVersion: 0,
  autoLogin: false,
  launchToTray: false,
  rememberMe: true,
  betaChannel: false,
  metadataLang: "en",
  logLocaleFormat: "",
  logTimeExample: "",
  logTimeFormat: "",
  logUri: ""
};

type AppSettings = typeof initialAppSettings;

const settingsSlice = createSlice<AppSettings, SliceCaseReducers<AppSettings>>({
  name: "appsettings",
  initialState: initialAppSettings,
  reducers: {
    setAppSettings: (
      state: AppSettings,
      action: PayloadAction<AppSettings>
    ): void => {
      Object.assign(state, action.payload);
    }
  }
});

export const { setAppSettings } = settingsSlice.actions;
export default settingsSlice;
