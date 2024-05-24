import { createSlice } from "@reduxjs/toolkit";
import { IMovieDetails } from "../types/movies";

interface IinitialState {
  favorites: IMovieDetails[];
}

const initialState: IinitialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavoritesAction: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFromFavoritesAction: (state, action) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.id === action.payload
      );
    },
  },
});

export const { addToFavoritesAction, removeFromFavoritesAction } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
