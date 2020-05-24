import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ExploreQuery {
  filterWCC: string;
  filterWCU: string;
  filterWCR: string;
  filterWCM: string;
  onlyOwned: boolean;
  filterType: string;
  filterEvent: string;
  filterSort: string;
  filterSortDir: -1 | 1;
  filteredMana: number[];
  filteredRanks: string[];
  filterSkip: number;
}

const initialExploreState = {
  activeEvents: [] as string[],
  data: {
    results_type: "Ranked Constructed",
    skip: 0,
    results_number: 0,
    result: [] as any[]
  },
  filters: {
    filterEvent: "Ladder",
    filterType: "Ranked Constructed",
    filterSort: "By Winrate",
    filterSortDir: -1,
    filterSkip: 0,
    filterWCC: "",
    filterWCU: "",
    filterWCR: "",
    filterWCM: "",
    filteredMana: [],
    filteredRanks: [],
    onlyOwned: false
  } as ExploreQuery
};

type Explore = typeof initialExploreState;

const _setExploreData = (
  state: Explore,
  action: PayloadAction<Explore["data"]>
): void => {
  const isSameResultType =
    state.data.results_type === action.payload.results_type;
  const isSubsequentResult = action.payload.skip > state.data.skip;
  if (isSameResultType && isSubsequentResult) {
    // when possible, extend prevous data
    const result = state.data.result.concat(action.payload.result);
    const resultsNumber =
      state.data.results_number + action.payload.results_number;
    action.payload.result = result;
    action.payload.results_number = resultsNumber;
    state.data = action.payload;
  } else if (action.payload.results_number === 0) {
    // query has no future results
    if (!isSubsequentResult) {
      state.data = action.payload;
    }
    state.data.results_number = -1;
  } else {
    state.data = action.payload;
  }
};

const _setExploreFilters = (
  state: Explore,
  action: PayloadAction<ExploreQuery>
): void => {
  state.filters = action.payload;
};

const _setExploreFiltersSkip = (
  state: Explore,
  action: PayloadAction<number>
): void => {
  state.filters.filterSkip = action.payload;
};

const _setActiveEvents = (
  state: Explore,
  action: PayloadAction<string>
): void => {
  state.activeEvents.push(...action.payload);
};

type SetActiveEventsArg = {
  type: "SET_ACTIVE_EVENTS";
  arg: Parameters<typeof _setActiveEvents>[1]["payload"];
};

type SetExploreDataArg = {
  type: "SET_EXPLORE_DATA";
  arg: Parameters<typeof _setExploreData>[1]["payload"];
};

type SetExploreFiltersArg = {
  type: "SET_EXPLORE_FILTERS";
  arg: Parameters<typeof _setExploreFilters>[1]["payload"];
};

type SetExploreFiltersSkipArg = {
  type: "SET_EXPLORE_FILTERS_SKIP";
  arg: Parameters<typeof _setExploreFiltersSkip>[1]["payload"];
};

export type ExploreReducerArgs =
  | SetActiveEventsArg
  | SetExploreDataArg
  | SetExploreFiltersArg
  | SetExploreFiltersSkipArg;

const exploreSlice = createSlice({
  name: "explore",
  initialState: initialExploreState,
  reducers: {
    setExploreData: _setExploreData,
    setExploreFilters: _setExploreFilters,
    setExploreFiltersSkip: _setExploreFiltersSkip,
    setActiveEvents: _setActiveEvents
  }
});

export const {
  setActiveEvents,
  setExploreData,
  setExploreFilters,
  setExploreFiltersSkip
} = exploreSlice.actions;

export default exploreSlice;
