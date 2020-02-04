import {coord, size, Size, Coord} from './model';

export enum EPlayManagerActionTypes {
  PLAY_ANIMATION_MANAGER_SET_DATA = 'PLAY_ANIMATION_MANAGER_SET_DATA',
  PLAY_ANIMATION_MANAGER_START = 'PLAY_ANIMATION_MANAGER_START',
}

export interface IPlayAnimationManagerActionBase {
  type: EPlayManagerActionTypes;
}

export interface IPlayAnimationManagerSetData
  extends IPlayAnimationManagerActionBase {
  type: typeof EPlayManagerActionTypes.PLAY_ANIMATION_MANAGER_SET_DATA;
  payload: {coord: Coord; size: Size};
}

export interface IPlayAnimationManagerStart {
  type: typeof EPlayManagerActionTypes.PLAY_ANIMATION_MANAGER_START;
  payload: {isPlaying: boolean};
}

export type IPlayAnimationManagerType =
  | IPlayAnimationManagerSetData
  | IPlayAnimationManagerStart;
