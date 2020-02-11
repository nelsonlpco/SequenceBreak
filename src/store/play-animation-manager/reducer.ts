import {PlayAnimationManagerState} from './model';
import {Size, Coord, IDictionary} from 'store/types';
import {
  EPlayManagerActionActionType,
  IPlayAnimationManagerActionBase,
} from './actions';

const DefaultState = new PlayAnimationManagerState(
  {x: 0, y: 0},
  {height: 0, width: 0},
  false,
);

type reducerType = {
  (state: PlayAnimationManagerState, payload: any): PlayAnimationManagerState;
};

function setCoords(
  state: PlayAnimationManagerState,
  payload: {coord: Coord; size: Size},
): PlayAnimationManagerState {
  return new PlayAnimationManagerState(
    payload.coord,
    payload.size,
    state.isPlaying,
  );
}

function start(
  state: PlayAnimationManagerState,
  payload: {isPlaying: boolean},
): PlayAnimationManagerState {
  return new PlayAnimationManagerState(
    state.coord,
    state.size,
    payload.isPlaying,
  );
}

interface IReducerMap {
  reducers: IDictionary<reducerType>;
}

const reducerMap: IReducerMap = {
  reducers: {
    [EPlayManagerActionActionType.PLAY_ANIMATION_MANAGER_SET_DATA]: setCoords,
    [EPlayManagerActionActionType.PLAY_ANIMATION_MANAGER_START]: start,
  },
};

export const PlayAnimationManagerReducer = (
  state: PlayAnimationManagerState = DefaultState,
  action: IPlayAnimationManagerActionBase,
): PlayAnimationManagerState => {
  if (!reducerMap.reducers[action.type]) return state;

  return reducerMap.reducers[action.type](state, action.payload);
};
