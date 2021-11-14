import { TBook, TWishlistItem } from "~/components";

export enum TActionTypes {
  SET_BOOKS = "SET_BOOKS",
  SET_LOADING = "SET_LOADING",
  ADD_TO_WISHLIST = "ADD_TO_WISHLIST",
  REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST",
}

export type TAction = {
  payload: TBook[] | TWishlistItem | TBook | boolean | string;
  type: TActionTypes;
};

export const setBooks = (books: TBook[]): TAction => ({
  payload: books,
  type: TActionTypes.SET_BOOKS,
});

export const toggleBooksLoading = (isLoading: boolean): TAction => ({
  payload: isLoading,
  type: TActionTypes.SET_LOADING,
});

export const addToWishList = (book: TWishlistItem): TAction => ({
  payload: book,
  type: TActionTypes.ADD_TO_WISHLIST,
});

export const removeFromWishlist = (id: string): TAction => ({
  payload: id,
  type: TActionTypes.REMOVE_FROM_WISHLIST,
});
