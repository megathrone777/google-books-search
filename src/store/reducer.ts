import React from "react";

import { TBook, TWishlistItem } from "~/components";
import { TAction, TActionTypes } from "./actions";
import { TStore } from "./initialStore";

const reducer: React.Reducer<TStore, TAction> = (store, { payload, type }) => {
  const actions = {
    [TActionTypes.SET_BOOKS]: (): TStore => ({
      ...store,
      books: payload as TBook[],
    }),

    [TActionTypes.SET_LOADING]: (): TStore => ({
      ...store,
      booksLoading: payload as boolean,
    }),

    [TActionTypes.ADD_TO_WISHLIST]: (): TStore => ({
      ...store,
      wishlist: [...store.wishlist, payload as TWishlistItem],
    }),

    [TActionTypes.REMOVE_FROM_WISHLIST]: (): TStore => {
      const wishlist = [...store.wishlist].filter(
        ({ id }: TWishlistItem) => id !== (payload as string)
      );

      return {
        ...store,
        wishlist,
      };
    },

    DEFAULT: (): TStore => {
      return store;
    },
  };

  return (actions[type] || actions["DEFAULT"])();
};

export { reducer };
