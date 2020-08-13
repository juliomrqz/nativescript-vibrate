import { Observable } from '@nativescript/core';
export declare class Common extends Observable {
    service: any;
    constructor();
    vibrate(time?: number | number[], repeat?: number): void;
    cancel(): void;
    hasVibrator(): boolean;
}
