import { User } from "./user";

export type Post = {
  id: string;
  user: User;
  createdAt: string;
  content: string;
  favoritesCount: number;
  isYourFavorite: boolean;
};
