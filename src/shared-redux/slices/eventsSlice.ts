import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import globalStore from "../../shared-store";
import { InternalEvent } from "../../types/event";

const initialEventsState = {
  eventsIndex: [] as string[]
};

type Events = typeof initialEventsState;

const eventsSlice = createSlice<Events, SliceCaseReducers<Events>>({
  name: "events",
  initialState: initialEventsState,
  reducers: {
    setEvent: (state: Events, action): void => {
      const event = action.payload as InternalEvent;
      globalStore.events[event.id] = { ...event };
      if (state.eventsIndex.indexOf(event.id) === -1) {
        state.eventsIndex.push(event.id);
      }
    },
    setManyEvents: (state: Events, action): void => {
      const newList: string[] = [];
      action.payload.map((event: InternalEvent) => {
        if (state.eventsIndex.indexOf(event.id) === -1) {
          globalStore.events[event.id] = event;
          newList.push(event.id);
        }
      });
      state.eventsIndex = [...newList, ...state.eventsIndex];
    }
  }
});

export default eventsSlice;
