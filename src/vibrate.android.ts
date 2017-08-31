import { Common } from './vibrate.common';
import * as app from 'tns-core-modules/application';

export class Vibrate extends Common {
    constructor() {
        super();

        this.service = app.android.context.getSystemService(android.content.Context.VIBRATOR_SERVICE);
    }

    hasVibrator(): boolean {
        return this.service.hasVibrator();
    }

    vibrate(param: number | number[] = 300, repeat: number = -1) {
        if (this.hasVibrator()) {
            if (typeof param === "number") {
                this.service.vibrate(param);
            } else {
                // Define array pattern length
                const patternLength = param.length;

                // Create the pattern array
                let pattern = Array.create('long', patternLength);

                // Assign the pattern values
                param.forEach((value, index) => { pattern[index] = value; });

                // Vibrate pattern
                this.service.vibrate(pattern, repeat);
            }
        }
    }

    cancel() {
        this.service.cancel();
    }
}
