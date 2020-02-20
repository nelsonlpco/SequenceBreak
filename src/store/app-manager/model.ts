export class AppManagerModel {
  startTimer: boolean;
  startPlayAnimation: boolean;
  startSequence: boolean;
  startInterval: boolean;

  constructor(
    startTimer: boolean = false,
    startPlayAnimation: boolean = false,
    startSequence: boolean = false,
    startInterval: boolean = false
  ) {
    this.startTimer = startTimer;
    this.startPlayAnimation = startPlayAnimation;
    this.startSequence = startSequence;
    this.startInterval = startInterval;
  }
}
