import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import globalStore from "../../shared-store";
import { InternalEconomyTransaction } from "../../types/inventory";

const initialEconomyState = {
  economyIndex: [] as string[]
};

type Economy = typeof initialEconomyState;

const economySlice = createSlice<Economy, SliceCaseReducers<Economy>>({
  name: "economy",
  initialState: initialEconomyState,
  reducers: {
    setEconomy: (state: Economy, action): void => {
      const economy = action.payload as InternalEconomyTransaction;
      globalStore.transactions[economy.id] = { ...economy };
      if (state.economyIndex.indexOf(economy.id) === -1) {
        state.economyIndex.push(economy.id);
      }
    },
    setManyEconomy: (state: Economy, action): void => {
      const newList: string[] = [];
      action.payload.map((economy: InternalEconomyTransaction) => {
        if (state.economyIndex.indexOf(economy.id) === -1) {
          globalStore.transactions[economy.id] = economy;
          newList.push(economy.id);
        }
      });
      state.economyIndex = [...newList, ...state.economyIndex];
    }
  }
});

export default economySlice;
