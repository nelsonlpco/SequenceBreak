import {IPlayManager, coord, size} from './model';
import {PlayManagerTypes, PlayManagerActions} from './types';

const DefaultState: IPlayManager = {
  stopCoords: {x: 0, y: 0},
  stopSize: {height: 0, width: 0},
  isPlaying: false,
};

function setStopCoordReducer(
  state: IPlayManager,
  payload: {stopCoord: coord; stopSize: size},
): IPlayManager {
  return {...state, stopCoords: payload.stopCoord, stopSize: payload.stopSize};
}

function playManagerStartReducer(
  state: IPlayManager,
  payload: {isPlaying: boolean},
): IPlayManager {
  return {...state, isPlaying: payload.isPlaying};
}

const reducerMap = {
  [PlayManagerActions.PLAY_MANAGER_SET_STOP_COORD]: setStopCoordReducer,
  [PlayManagerActions.PLAY_MANAGER_START]: playManagerStartReducer,
};

export const PlayAnimationManagerReducer = (
  state: IPlayManager = DefaultState,
  action: PlayManagerTypes,
): IPlayManager => {
  if (!reducerMap[action.type]) return state;

  return reducerMap[action.type](state, action.payload);
};
