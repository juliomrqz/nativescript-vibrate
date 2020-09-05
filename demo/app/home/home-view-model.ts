import { Observable } from '@nativescript/core';
import { Vibrate } from 'nativescript-vibrate';

export class HomeViewModel extends Observable {
    public hasVibrator: string;
    public vibrator: Vibrate;

    constructor() {
        super();
        this.vibrator = new Vibrate();

        // Has vibrator
        this.hasVibrator = 'Has vibrator?: ' + this.vibrator.hasVibrator();
    }

    // Basic vibration
    basicVibrate(eventData) {
        console.log('Basic vibrate');
        this.vibrator.vibrate();
    }

    // One seconds vibration
    oneSecondVibrate(eventData) {
        this.vibrator.vibrate(1000);
        console.log('1 seconds vibrate');
    }

    // Pattern vibration
    patternVibrate(eventData) {
        this.vibrator.vibrate([1000, 300, 500, 2000]);
        console.log('Pattern vibrate');
    }

    // Cancel vibration
    cancelVibrate(eventData) {
        this.vibrator.cancel();
        console.log('Cancel vibrate');
    }
}
