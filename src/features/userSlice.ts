import { createSlice } from "@reduxjs/toolkit";

interface IinitialSate {
  isLoggedIn: boolean;
}

const initialState: IinitialSate = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
