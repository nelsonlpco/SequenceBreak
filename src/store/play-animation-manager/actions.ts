import {Size, Coord} from 'store/types';

export enum EPlayManagerActionActionType {
  PLAY_ANIMATION_MANAGER_SET_DATA = 'PLAY_ANIMATION_MANAGER_SET_DATA',
  PLAY_ANIMATION_MANAGER_START = 'PLAY_ANIMATION_MANAGER_START',
}

export interface IPlayAnimationManagerActionBase {
  type: EPlayManagerActionActionType;
  payload: any;
}

export interface IPlayAnimationManagerSetData
  extends IPlayAnimationManagerActionBase {
  type: typeof EPlayManagerActionActionType.PLAY_ANIMATION_MANAGER_SET_DATA;
  payload: {coord: Coord; size: Size};
}

export interface IPlayAnimationManagerStart
  extends IPlayAnimationManagerActionBase {
  type: typeof EPlayManagerActionActionType.PLAY_ANIMATION_MANAGER_START;
  payload: {isPlaying: boolean};
}

export const setData = (
  coord: Coord,
  size: Size,
): IPlayAnimationManagerSetData => ({
  payload: {coord, size},
  type: EPlayManagerActionActionType.PLAY_ANIMATION_MANAGER_SET_DATA,
});

export const playManagerStart = (
  isPlaying: boolean,
): IPlayAnimationManagerStart => ({
  payload: {isPlaying},
  type: EPlayManagerActionActionType.PLAY_ANIMATION_MANAGER_START,
});

export default {
  setData,
  playManagerStart,
};
