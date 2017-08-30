import { Observable } from 'tns-core-modules/data/observable';
// import * as app from 'tns-core-modules/application';

export class Common extends Observable {
  /**
   * Gets or set the vibration service.
   */
  public service: any;

  constructor() {
    super();
  }

  /**
   * Vibrate constantly for the specified period of time.
   * @param {number} time - The number of milliseconds to vibrate
   * @param {number[]} time - An array of longs of times for which
   * to turn the vibrator on or off.
   * @param {number} repeat - The index into pattern at which to repeat,
   * or -1 if you don't want to repeat.
   */
  vibrate(time?: number | number[], repeat?: number) { }

  /**
   * Turn the vibrator off.
   */
  cancel(): void { }

  /**
   * Check whether the hardware has a vibrator.
   */
  hasVibrator(): boolean {
    return true;
  }
}

