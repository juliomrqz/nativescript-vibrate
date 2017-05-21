import {Common} from './vibrate.common';

export class Vibrate extends Common {
    vibrate() {
        AudioServicesPlaySystemSound(kSystemSoundID_Vibrate);
    }
}