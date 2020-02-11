import {createStore, combineReducers, applyMiddleware} from 'redux';

import {PlayAnimationManagerReducer} from './play-animation-manager';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
  PlayAnimationManagerReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export function configureStore() {
  const middlewareEnhancer = applyMiddleware();
  const store = createStore(rootReducer, composeWithDevTools());

  return store;
}
