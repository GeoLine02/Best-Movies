import { createSlice } from "@reduxjs/toolkit";
import { decodeToken, toggleStorage } from "../utils";

interface IinitialSate {
  isLoggedIn: boolean;
  isSignUpOpen: boolean;
  isSignInOpen: boolean;
  user: string | null;
}

const initialState: IinitialSate = {
  isLoggedIn: false,
  isSignInOpen: false,
  isSignUpOpen: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSignUpModal: (state) => {
      state.isSignUpOpen = !state.isSignUpOpen;
    },
    toggleSignInModal: (state) => {
      state.isSignInOpen = !state.isSignInOpen;
    },
    SignInAction: (state, action) => {
      const token = action.payload;
      const user = decodeToken(token) as unknown as string;
      toggleStorage(token);
      state.isLoggedIn = true;
      state.user = user;
    },
    SignOutAction: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem("accessToken");
    },
  },
});

export const {
  toggleSignUpModal,
  toggleSignInModal,
  SignInAction,
  SignOutAction,
} = userSlice.actions;
export default userSlice.reducer;
