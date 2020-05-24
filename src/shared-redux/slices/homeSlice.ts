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

const homeSlice = createSlice({
  name: "home",
  initialState: initialHomeState,
  reducers: {
    setHomeData: _setHomeData
  }
});

export const { setHomeData } = homeSlice.actions;

export default homeSlice;
