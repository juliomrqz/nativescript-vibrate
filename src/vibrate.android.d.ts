import { Common } from './vibrate.common';
export declare class Vibrate extends Common {
    private vibratorService;
    hasVibrator(): boolean;
    vibrate(param?: number | number[], repeat?: number): void;
    cancel(): void;
    private getVibratorService;
}
