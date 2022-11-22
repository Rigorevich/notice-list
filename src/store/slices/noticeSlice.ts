import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface NoticeState {
  notices: Array<Type>;
}

interface Type {
  id?: number;
  text?: string;
  tag?: string;
}

const initialState: NoticeState = {
  notices: [],
};

export const noticeSlice = createSlice({
  name: "notice",
  initialState,
  reducers: {
    createNotice: (state, action: PayloadAction<object>) => {
      state.notices.push(action.payload);
    },
  },
});

export const { createNotice } = noticeSlice.actions;

export const selectNotice = (state: RootState) => state.notice.notice;

export default noticeSlice.reducer;
