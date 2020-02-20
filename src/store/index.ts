import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import AppManagerReducer from "./app-manager/reducers";

const rootReducer = combineReducers({ AppManagerReducer });

export type AppState = ReturnType<typeof rootReducer>;

export function configureStore() {
  const store = createStore(rootReducer, composeWithDevTools());

  return store;
}
