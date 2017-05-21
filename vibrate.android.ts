import { Common } from './vibrate.common';

export class Vibrate extends Common {

    constructor() {
        super();

        this.service = app.android.context.getSystemService(android.content.Context.VIBRATOR_SERVICE);
    }

    hasVibrator(): boolean {
        return this.service.hasVibrator();
    }

    vibrate(param: number) {
        if (this.hasVibrator()) {
            this.service.vibrate(param);
        }
    }
}