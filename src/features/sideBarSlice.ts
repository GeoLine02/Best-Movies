import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  isSideBarOpen: boolean;
}

const initialState: IinitialState = {
  isSideBarOpen: false,
};

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  },
});

export const { toggleSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
