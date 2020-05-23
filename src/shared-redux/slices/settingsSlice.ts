import {
  createSlice,
  SliceCaseReducers,
  PayloadAction
} from "@reduxjs/toolkit";
import defaultConfig from "../../shared/defaultConfig";

const initialSettings = { ...defaultConfig.settings };

export type Settings = typeof initialSettings;

const settingsSlice = createSlice<Settings, SliceCaseReducers<Settings>>({
  name: "settings",
  initialState: initialSettings,
  reducers: {
    setSettings: (state: Settings, action: PayloadAction<Settings>): void => {
      Object.assign(state, action.payload);
    }
  }
});

export const { setSettings } = settingsSlice.actions;
export default settingsSlice;
