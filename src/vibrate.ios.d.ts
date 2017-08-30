import { Common } from './vibrate.common';
export declare class Vibrate extends Common {
    hasVibrator(): boolean;
    vibrate(time: number | number[], repeat: number): void;
    cancel(): void;
}
