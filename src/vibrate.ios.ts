import { Common } from './vibrate.common';

export class Vibrate extends Common {
    hasVibrator(): boolean {
        return true;
    }

    vibrate(time: number | number[], repeat: number) {
        // a bit of a magic number, but this seems to be the most reliable way to vibrate an iOS device
        AudioServicesPlaySystemSoundWithCompletion(1352, null);
    }

    cancel() {
        return;
    }
}
