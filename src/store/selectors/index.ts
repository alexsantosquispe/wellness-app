import type { RootState } from "..";

export const getFavorites = (state: RootState) => state.favorites.items;
