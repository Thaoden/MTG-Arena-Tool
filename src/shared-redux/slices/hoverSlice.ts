import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialHover = {
  grpId: 0,
  opacity: 0,
  wanted: 0
};

type Hover = typeof initialHover;

const _setHoverIn = (
  state: Hover,
  action: PayloadAction<{ grpId: number; wanted: number }>
): void => {
  const { grpId, wanted } = action.payload;
  Object.assign(state, {
    grpId: grpId,
    wanted: wanted ?? 0,
    opacity: 1
  });
};

const _setHoverOut = (state: Hover): void => {
  state.opacity = 0;
};

type SetHoverInArg = {
  type: "SET_HOVER_IN";
  arg: Parameters<typeof _setHoverIn>[1]["payload"];
};

type SetHoverOutArg = {
  type: "SET_HOVER_OUT";
  arg: never;
};

export type HoverReducerArgs = SetHoverInArg | SetHoverOutArg;

const hoverSlice = createSlice({
  name: "hover",
  initialState: initialHover,
  reducers: {
    setHoverIn: _setHoverIn,
    setHoverOut: _setHoverOut
  }
});

export const { setHoverIn, setHoverOut } = hoverSlice.actions;

export default hoverSlice;
