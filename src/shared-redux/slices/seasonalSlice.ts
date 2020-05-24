import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SeasonalRankData } from "../../types/Season";
import globalStore from "../../shared-store";

const initialSeasonalState = {
  seasonal: {} as Record<string, string[]>
};

type Seasonal = typeof initialSeasonalState;

const _setSeasonal = (
  state: Seasonal,
  action: PayloadAction<SeasonalRankData>
): void => {
  const update = action.payload;
  // Add to global store
  globalStore.seasonal[update.id] = update;
  const season = `${update.rankUpdateType.toLowerCase()}_${
    update.seasonOrdinal
  }`;
  // Add to indexes
  state.seasonal[season] = [...(state.seasonal[season] || []), update.id];
};

const _setManySeasonal = (
  state: Seasonal,
  action: PayloadAction<{ [id: string]: SeasonalRankData }>
): void => {
  const newSeasonal = { ...state.seasonal };
  Object.keys(action.payload).forEach((id: string) => {
    const update = action.payload[id] as SeasonalRankData;
    // Add to global store
    globalStore.seasonal[update.id] = update;
    const season = `${update.rankUpdateType.toLowerCase()}_${
      update.seasonOrdinal
    }`;
    // Add to indexes
    newSeasonal[season] = [...(newSeasonal[season] || []), update.id];
  });
  state.seasonal = newSeasonal;
};

type SetSeasonalArg = {
  type: "SET_SEASONAL";
  arg: Parameters<typeof _setSeasonal>[1]["payload"];
};

type SetManySeasonalArg = {
  type: "SET_MANY_SEASONAL";
  arg: Parameters<typeof _setManySeasonal>[1]["payload"];
};

export type SeasonalReducerArgs = SetSeasonalArg | SetManySeasonalArg;

const seasonalSlice = createSlice({
  name: "seasonal",
  initialState: initialSeasonalState,
  reducers: {
    setSeasonal: _setSeasonal,
    setManySeasonal: _setManySeasonal
  }
});

export const { setSeasonal, setManySeasonal } = seasonalSlice.actions;

export default seasonalSlice;
