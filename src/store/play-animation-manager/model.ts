import {Coord, Size} from 'store/types';

export class PlayAnimationManagerState {
  coord: Coord;
  size: Size;
  isPlaying: boolean;

  constructor(coord: Coord, size: Size, isPlaying: boolean) {
    this.coord = coord;
    this.size = size;
    this.isPlaying = isPlaying;
  }
}
