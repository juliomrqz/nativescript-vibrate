import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';

export class Common extends Observable {
  /**
   * Gets or set the vibration service.
   */
  public service: any;

  constructor() {
    super();
  }

  vibrate(time?: number | number[], repeat?: number) { }

  cancel(): void { }

  hasVibrator(): boolean {
    return true;
  }
}

