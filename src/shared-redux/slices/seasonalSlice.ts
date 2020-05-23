import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { SeasonalRankData } from "../../types/Season";
import globalStore from "../../shared-store";

const initialSeasonalState = {
  seasonal: {} as Record<string, string[]>
};

type Seasonal = typeof initialSeasonalState;

const seasonalSlice = createSlice<Seasonal, SliceCaseReducers<Seasonal>>({
  name: "seasonal",
  initialState: initialSeasonalState,
  reducers: {
    setSeasonal: (state: Seasonal, action): void => {
      const update = action.payload as SeasonalRankData;
      // Add to global store
      globalStore.seasonal[update.id] = update;
      const season = `${update.rankUpdateType.toLowerCase()}_${
        update.seasonOrdinal
      }`;
      // Add to indexes
      state.seasonal[season] = [...(state.seasonal[season] || []), update.id];
    },
    setManySeasonal: (state: Seasonal, action): void => {
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
    }
  }
});

export default seasonalSlice;
