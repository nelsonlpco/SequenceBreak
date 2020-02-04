export type Coord = {
  x: number;
  y: number;
};

export type Size = {
  width: number;
  height: number;
};

export interface IPlayAnimationManagerState {
  coord: Coord;
  size: Size;
  isPlaying: boolean;
}
