type EnumLiteralsOf<T extends object> = T[keyof T];

export const appManagerActionTypes = Object.freeze({
  APP_MANAGER_START_SEQUENCE: "APP_MANAGER_START_SEQUENCE" as "APP_MANAGER_START_SEQUENCE",
  APP_MANAGER_STOP_SEQUENCE: "APP_MANAGER_STOP_SEQUENCE" as "APP_MANAGER_STOP_SEQUENCE",
  APP_MANAGER_START_INTERVAL: "APP_MANAGER_START_INTERVAL" as "APP_MANAGER_START_INTERVAL",
  APP_MANAGER_STOP_INTERVAL: "APP_MANAGER_STOP_INTERVAL" as "APP_MANAGER_STOP_INTERVAL",
  APP_MANAGER_START_TIMER: "APP_MANAGER_START_TIMER" as "APP_MANAGER_START_TIMER",
  APP_MANAGER_STOP_TIMER: "APP_MANAGER_STOP_TIMER" as "APP_MANAGER_STOP_TIMER",
  APP_MANAGER_START_PLAY_ANIMATION: "APP_MANAGER_START_PLAY_ANIMATION" as "APP_MANAGER_START_PLAY_ANIMATION",
  APP_MANAGER_STOP_PLAY_ANIMATION: "APP_MANAGER_STOP_PLAY_ANIMATION" as "APP_MANAGER_STOP_PLAY_ANIMATION"
});

export type AppManagerActionType = EnumLiteralsOf<typeof appManagerActionTypes>;

export interface IAppManagerActionBase {
  type: AppManagerActionType;
}

export const AppManagerStartSequence = (): IAppManagerActionBase => ({
  type: appManagerActionTypes.APP_MANAGER_START_SEQUENCE
});

export const AppManagerStopSequence = (): IAppManagerActionBase => ({
  type: appManagerActionTypes.APP_MANAGER_STOP_SEQUENCE
});

export const AppManagerStartInterval = (): IAppManagerActionBase => ({
  type: appManagerActionTypes.APP_MANAGER_START_INTERVAL
});

export const AppManagerStopInterval = (): IAppManagerActionBase => ({
  type: appManagerActionTypes.APP_MANAGER_STOP_INTERVAL
});

export const AppManagerStartTimer = (): IAppManagerActionBase => ({
  type: appManagerActionTypes.APP_MANAGER_START_TIMER
});

export const AppManagerStopTimer = (): IAppManagerActionBase => ({
  type: appManagerActionTypes.APP_MANAGER_STOP_TIMER
});

export const AppManagerStartPlayAnimation = (): IAppManagerActionBase => ({
  type: appManagerActionTypes.APP_MANAGER_START_PLAY_ANIMATION
});

export const AppManagerStopPlayAnimation = (): IAppManagerActionBase => ({
  type: appManagerActionTypes.APP_MANAGER_STOP_PLAY_ANIMATION
});
