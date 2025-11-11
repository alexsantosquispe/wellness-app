import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FavoriteItem, FavoritesState } from "../../models/types";

const initialState: FavoritesState = {
  items: []
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<FavoriteItem>) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (exists) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.items.push(action.payload);
      }
    }
  }
});

export const { toggleFavorite } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
