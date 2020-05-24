import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import globalStore from "../../shared-store";
import { InternalEconomyTransaction } from "../../types/inventory";

const initialEconomyState = {
  economyIndex: [] as string[]
};

type Economy = typeof initialEconomyState;

const _setEconomy = (
  state: Economy,
  action: PayloadAction<InternalEconomyTransaction>
): void => {
  const economy = action.payload;
  globalStore.transactions[economy.id] = { ...economy };
  if (state.economyIndex.indexOf(economy.id) === -1) {
    state.economyIndex.push(economy.id);
  }
};

const _setManyEconomy = (
  state: Economy,
  action: PayloadAction<InternalEconomyTransaction[]>
): void => {
  const newList: string[] = [];
  action.payload.map((economy: InternalEconomyTransaction) => {
    if (state.economyIndex.indexOf(economy.id) === -1) {
      globalStore.transactions[economy.id] = economy;
      newList.push(economy.id);
    }
  });
  state.economyIndex = [...newList, ...state.economyIndex];
};

const economySlice = createSlice({
  name: "economy",
  initialState: initialEconomyState,
  reducers: {
    setEconomy: _setEconomy,
    setManyEconomy: _setManyEconomy
  }
});

export const { setEconomy, setManyEconomy } = economySlice.actions;

export default economySlice;
