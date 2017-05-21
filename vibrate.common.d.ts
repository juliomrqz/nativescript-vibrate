import { Observable } from 'data/observable';
export declare class Common extends Observable {
    /**
     * Gets or set the vibration service.
     */
    service: any;
    constructor();
    vibrate(time?: number | number[], repeat?: number): void;
    cancel(): void;
    hasVibrator(): boolean;
}
