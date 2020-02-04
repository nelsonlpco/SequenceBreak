import {AppState} from '..';
import {IPlayAnimationManagerState} from './model';

const getState = (state: AppState): IPlayAnimationManagerState =>
  state.PlayAnimationManagerReducer;

const getCoord = (state: AppState) => getState(state).coord;
const getSize = (state: AppState) => getState(state).size;
const isPlaying = (state: AppState) => getState(state).isPlaying;

export default {
  getCoord,
  getSize,
  isPlaying,
};
