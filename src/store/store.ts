import { configureStore } from "@reduxjs/toolkit";
import noticeReducer from "./slices/noticeSlice";
import tagReducer from "./slices/tagsSlice";

export const store = configureStore({
  reducer: {
    notices: noticeReducer,
    tags: tagReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
