import { Common } from './vibrate.common';
export declare class Vibrate extends Common {
    constructor();
    hasVibrator(): boolean;
    vibrate(param?: number | number[], repeat?: number): void;
    cancel(): void;
}
