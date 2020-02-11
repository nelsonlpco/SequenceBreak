export type Coord = {
  x: number;
  y: number;
};

export type Size = {
  width: number;
  height: number;
};

export interface IDictionary<T> {
  [key: string]: T;
}
