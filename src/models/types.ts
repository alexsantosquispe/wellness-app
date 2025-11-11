export interface SessionType {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  duration: number;
  instructor: string;
  rating: number;
}

export interface FavoriteItem {
  id: string;
  title: string;
}

export interface FavoritesState {
  items: FavoriteItem[];
}
