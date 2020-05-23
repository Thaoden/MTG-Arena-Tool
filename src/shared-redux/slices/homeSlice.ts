import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { WildcardsChange } from "../../window_main/tabs/HomeTab";

const initialHomeState = {
  wildcards: [] as WildcardsChange[],
  filteredSet: "",
  usersActive: 0
};

type Home = typeof initialHomeState;

const homeSlice = createSlice<Home, SliceCaseReducers<Home>>({
  name: "home",
  initialState: initialHomeState,
  reducers: {
    setHomeData: (state: Home, action): any => action.payload
  }
});

export default homeSlice;
