import { AppManagerModel } from "./model";
import { IAppManagerActionBase, appManagerActionTypes } from "./actions";

const DEFAULT_STATE = new AppManagerModel();

const setStartPlayAnimation = (
  state: AppManagerModel,
  action: IAppManagerActionBase
) => {
  return new AppManagerModel(
    state.startTimer,
    true,
    state.startSequence,
    state.startInterval
  );
};

const setStopPlayAnimation = (
  state: AppManagerModel,
  action: IAppManagerActionBase
) => {
  return new AppManagerModel(
    state.startTimer,
    false,
    state.startSequence,
    state.startInterval
  );
};

const reducersMap = {
  [appManagerActionTypes.APP_MANAGER_START_PLAY_ANIMATION]: setStartPlayAnimation,
  [appManagerActionTypes.APP_MANAGER_STOP_PLAY_ANIMATION]: setStopPlayAnimation
};

export default (
  state: AppManagerModel = DEFAULT_STATE,
  action: IAppManagerActionBase
): AppManagerModel => {
  const reducer = reducersMap[action.type];

  if (reducer) return reducer(state, action);

  return state;
};
