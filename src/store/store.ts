import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import sideBarReducer from "../features/sideBarSlice";
import moviesReducer from "../features/moviesSlice";
import favoritesReducer from "../features/favoritesSlice";

const store = configureStore({
  reducer: {
    userReducer: userReducer,
    sideBarReducer: sideBarReducer,
    moviesReducer: moviesReducer,
    favoritesReducer: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
