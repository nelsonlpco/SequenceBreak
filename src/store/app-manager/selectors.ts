import { AppState } from "..";

const getState = (state: AppState) => state.AppManagerReducer;

export const getStartTimer = (state: AppState) => getState(state).startTimer;
export const getStartPlayAnimation = (state: AppState) =>
  getState(state).startPlayAnimation;
export const getStartSequence = (state: AppState) =>
  getState(state).startSequence;
export const getStartInterval = (state: AppState) =>
  getState(state).startInterval;
