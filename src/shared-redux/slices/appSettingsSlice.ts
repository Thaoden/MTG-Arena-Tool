import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const _setAppSettings = (
  state: AppSettings,
  action: PayloadAction<Partial<AppSettings>>
): void => {
  state = { ...state, ...action.payload };
};

const settingsSlice = createSlice({
  name: "appsettings",
  initialState: initialAppSettings,
  reducers: {
    setAppSettings: _setAppSettings
  }
});

type SetAppSettingsArg = {
  type: "SET_APP_SETTINGS";
  arg: Parameters<typeof _setAppSettings>[1]["payload"];
};

export type AppSettingsReducerArgs = SetAppSettingsArg;

export const { setAppSettings } = settingsSlice.actions;
export default settingsSlice;
