import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import defaultConfig from "../../shared/defaultConfig";

const initialSettings = { ...defaultConfig.settings };

type Settings = typeof initialSettings;

const _setSettings = (
  state: Settings,
  action: PayloadAction<Partial<Settings>>
): void => {
  state = { ...state, ...action.payload };
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: initialSettings,
  reducers: { setSettings: _setSettings }
});

type SetSettingsArg = {
  type: "SET_SETTINGS";
  arg: Parameters<typeof _setSettings>[1]["payload"];
};

export type SettingsReducerArgs = SetSettingsArg;

export const { setSettings } = settingsSlice.actions;
export default settingsSlice;
