import {Observable} from 'data/observable';
import {Vibrate} from 'nativescript-vibrate';

export class HelloWorldModel extends Observable {
  public message: string;
  private vibrate: Vibrate;

  constructor() {
    super();

    this.vibrate = new Vibrate();
    this.message = this.vibrate.message;
  }
}