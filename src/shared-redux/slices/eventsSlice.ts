import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import globalStore from "../../shared-store";
import { InternalEvent } from "../../types/event";

const initialEventsState = {
  eventsIndex: [] as string[]
};

type Events = typeof initialEventsState;

const _setEvent = (
  state: Events,
  action: PayloadAction<InternalEvent>
): void => {
  const event = action.payload;
  globalStore.events[event.id] = { ...event };
  if (state.eventsIndex.indexOf(event.id) === -1) {
    state.eventsIndex.push(event.id);
  }
};

const _setManyEvents = (
  state: Events,
  action: PayloadAction<InternalEvent[]>
): void => {
  const newList: string[] = [];
  action.payload.map((event: InternalEvent) => {
    if (state.eventsIndex.indexOf(event.id) === -1) {
      globalStore.events[event.id] = event;
      newList.push(event.id);
    }
  });
  state.eventsIndex = [...newList, ...state.eventsIndex];
};

const eventsSlice = createSlice({
  name: "events",
  initialState: initialEventsState,
  reducers: {
    setEvent: _setEvent,
    setManyEvents: _setManyEvents
  }
});

export const { setEvent, setManyEvents } = eventsSlice.actions;

export default eventsSlice;
