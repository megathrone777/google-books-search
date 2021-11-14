import { TBook, TWishlistItem } from "~/components";

export interface TStore {
  books: TBook[];
  booksLoading: boolean;
  wishlist: TWishlistItem[];
}

const initialStore: TStore = {
  books: [],
  booksLoading: false,
  wishlist: [],
};

export { initialStore };
