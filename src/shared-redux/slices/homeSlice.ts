import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WildcardsChange } from "../../window_main/tabs/HomeTab";

const initialHomeState = {
  wildcards: [] as WildcardsChange[],
  filteredSet: "",
  usersActive: 0
};

type Home = typeof initialHomeState;

const _setHomeData = (state: Home, action: PayloadAction<Home>): Home =>
  action.payload;

type SetHomeDataArg = {
  type: "SET_HOME_DATA";
  arg: Parameters<typeof _setHomeData>[1]["payload"];
};

export type HomeReducerArgs = SetHomeDataArg;

const homeSlice = createSlice({
  name: "home",
  initialState: initialHomeState,
  reducers: {
    setHomeData: (state: Home, action: PayloadAction<Home>): Home =>
      action.payload
  }
});

export const { setHomeData } = homeSlice.actions;

export default homeSlice;
