import { Common } from './vibrate.common';
import { Application } from '@nativescript/core';

export class Vibrate extends Common {
    private vibratorService;

    hasVibrator(): boolean {
        return this.getVibratorService().hasVibrator();
    }

    vibrate(param: number | number[] = 300, repeat: number = -1) {
        if (this.hasVibrator()) {
            if (typeof param === "number") {
                this.getVibratorService().vibrate(param);
            } else {
                // Define array pattern length
                const patternLength = param.length;

                // Create the pattern array
                let pattern = Array.create('long', patternLength);

                // Assign the pattern values
                param.forEach((value, index) => { pattern[index] = value; });

                // Vibrate pattern
                this.getVibratorService().vibrate(pattern, repeat);
            }
        }
    }

    cancel() {
        this.getVibratorService().cancel();
    }

    private getVibratorService() {
        if (!this.vibratorService) {
            this.vibratorService = Application.android.context.getSystemService(android.content.Context.VIBRATOR_SERVICE);
        }
        return this.vibratorService;
    }
}
