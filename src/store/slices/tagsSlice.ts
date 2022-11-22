import { createSlice } from "@reduxjs/toolkit";
import { TagState } from "../../@types/interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState: TagState = {
  tags: localStorage.getItem("tags")
    ? JSON.parse(localStorage.getItem("tags") as string)
    : [],
};

export const tagSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    createTag: (state, action: PayloadAction<string[]>) => {
      state.tags = [...state.tags, ...action.payload];
      localStorage.setItem("tags", JSON.stringify(state.tags));
    },
    deleteTag: (state, action: PayloadAction<string>) => {
      state.tags = state.tags.filter((tag) => tag !== action.payload);
      localStorage.setItem("tags", JSON.stringify(state.tags));
    },
  },
});

export const { createTag, deleteTag } = tagSlice.actions;

export const selectNotice = (state: RootState) => state.notices.notices;

export default tagSlice.reducer;
