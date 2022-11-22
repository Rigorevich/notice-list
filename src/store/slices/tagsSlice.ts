import { createSlice } from "@reduxjs/toolkit";
import { TagState } from "../../@types/interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState: TagState = {
  tags: localStorage.getItem("tags")
    ? JSON.parse(localStorage.getItem("tags") as string)
    : [],
  activeTag: "",
};

export const tagSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    createTag: (state, action: PayloadAction<string[]>) => {
      state.tags = Array.from(new Set([...state.tags, ...action.payload]));
      localStorage.setItem("tags", JSON.stringify(state.tags));
    },
    deleteTag: (state, action: PayloadAction<string>) => {
      state.tags = state.tags.filter((tag) => tag !== action.payload);
      localStorage.setItem("tags", JSON.stringify(state.tags));
    },
    setActiveTag: (state, action: PayloadAction<string>) => {
      state.activeTag = action.payload;
    },
  },
});

export const { createTag, deleteTag, setActiveTag } = tagSlice.actions;

export const selectNotice = (state: RootState) => state.notices.notices;

export default tagSlice.reducer;
