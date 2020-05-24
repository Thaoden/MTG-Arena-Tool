import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WildcardsChange } from "../../window_main/tabs/HomeTab";

const initialHomeState = {
  wildcards: [] as WildcardsChange[],
  filteredSet: "",
  usersActive: 0
};

export type Home = typeof initialHomeState;

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
