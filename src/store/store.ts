import { configureStore } from "@reduxjs/toolkit";
import noticeReducer from "./slices/noticeSlice";

export const store = configureStore({
  reducer: {
    notices: noticeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
