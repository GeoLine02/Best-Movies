import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import sideBarReducer from "../features/sideBarSlice";

const store = configureStore({
  reducer: {
    userReducer: userReducer,
    sideBarReducer: sideBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
