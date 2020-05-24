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
