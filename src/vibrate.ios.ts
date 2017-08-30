import { Common } from './vibrate.common';

export class Vibrate extends Common {
    hasVibrator(): boolean {
        return true;
    }

    vibrate(time: number | number[], repeat: number) {
        AudioServicesPlaySystemSound(kSystemSoundID_Vibrate);
    }

    cancel() {
        return;
    }
}
