import { Observable } from 'data/observable';
import * as app from 'application';
import * as dialogs from 'ui/dialogs';

export class Common extends Observable {
  /**
   * Gets or set the vibration service.
   */
  public service: any;

  constructor() {
    super();
  }

  vibrate(time?: number) { }
  
  hasVibrator(): boolean {
    return true;
  }
}

