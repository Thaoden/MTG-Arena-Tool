import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import defaultConfig from "../../shared/defaultConfig";

const initialSettings = { ...defaultConfig.settings };

type Settings = typeof initialSettings;

const settingsSlice = createSlice<Settings, SliceCaseReducers<Settings>>({
  name: "settings",
  initialState: initialSettings,
  reducers: {
    setSettings: (state: Settings, action): void => {
      Object.assign(state, action.payload);
    }
  }
});

export default settingsSlice;
