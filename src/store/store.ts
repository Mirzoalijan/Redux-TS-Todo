import todosSlice from "../reducers/slice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
