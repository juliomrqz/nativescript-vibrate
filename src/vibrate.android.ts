import { Common } from './vibrate.common';

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
                let pattern = Array.create('long', param.length);
                pattern.forEach((element, index) => { pattern[index] = element; });

                this.service.vibrate(pattern, repeat);
            }
        }
    }

    cancel() {
        this.service.cancel();
    }
}
