import React, { createContext, useReducer } from "react";

import { TStore, initialStore } from "./initialStore";
import { TAction } from "./actions";
import { reducer } from "./reducer";

const AppContext = createContext<{
  store: TStore;
  dispatch: React.Dispatch<TAction>;
}>({
  store: initialStore,
  dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialStore);

  return (
    <AppContext.Provider value={{ store, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
