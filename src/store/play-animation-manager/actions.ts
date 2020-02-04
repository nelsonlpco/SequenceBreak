import {
  EPlayManagerActionTypes,
  IPlayAnimationManagerSetData,
  IPlayAnimationManagerStart,
} from './types';
import {Coord, Size, IPlayAnimationManagerState} from './model';

export const setData = (
  coord: Coord,
  size: Size,
): IPlayAnimationManagerSetData => ({
  payload: {coord, size},
  type: EPlayManagerActionTypes.PLAY_ANIMATION_MANAGER_SET_DATA,
});

export const playManagerStart = (
  isPlaying: boolean,
): IPlayAnimationManagerStart => ({
  payload: {isPlaying},
  type: EPlayManagerActionTypes.PLAY_ANIMATION_MANAGER_START,
});

export default {
  setData,
  playManagerStart,
};
