import { Observable } from 'tns-core-modules/data/observable';
import { Vibrate } from 'nativescript-vibrate';

export class HelloWorldModel extends Observable {
  public message: string;
  private vibrate: Vibrate;

  constructor() {
    super();

    this.vibrate = new Vibrate();
  }
}