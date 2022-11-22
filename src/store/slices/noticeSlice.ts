import { createSlice } from "@reduxjs/toolkit";
import { NoticeState } from "../../@types/interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { findTag } from "../../utils/utils";

const initialState: NoticeState = {
  notices: localStorage.getItem("notices")
    ? JSON.parse(localStorage.getItem("notices") as string)
    : [],
};

export const noticeSlice = createSlice({
  name: "notices",
  initialState,
  reducers: {
    createNotice: (state, action: PayloadAction<string>) => {
      const obj = {
        id: state.notices[state.notices.length - 1]?.id + 1 || 1,
        text: action.payload,
        tag: findTag(action.payload),
      };
      state.notices.push(obj);
      localStorage.setItem("notices", JSON.stringify(state.notices));
    },
    deleteNotice: (state, action: PayloadAction<number>) => {
      state.notices = state.notices.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { createNotice, deleteNotice } = noticeSlice.actions;

export const selectNotice = (state: RootState) => state.notices.notices;

export default noticeSlice.reducer;
