import { Observable } from 'data/observable';
export declare class Common extends Observable {
    /**
     * Gets or set the vibration service.
     */
    service: any;
    constructor();
    vibrate(time?: number): void;
    hasVibrator(): boolean;
}
