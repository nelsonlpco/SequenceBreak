import {createStore, combineReducers, applyMiddleware} from 'redux';

import {PlayAnimationManagerReducer} from './play-animation-manager';

const rootReducer = combineReducers({
  PlayAnimationManagerReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export function configureStore() {
  //   const middlewares = [];
  const middlewareEnhancer = applyMiddleware();
  const store = createStore(rootReducer);

  return store;
}
