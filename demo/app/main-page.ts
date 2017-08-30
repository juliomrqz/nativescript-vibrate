import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { Vibrate } from 'nativescript-vibrate';


// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    let vibrator = new Vibrate();

    // Get the event sender
    let page = <pages.Page>args.object;

    // Source
    const source = new observable.Observable();

    // Basic vibration
    source.set("basicVibrate", function (eventData) {
        console.log('Basic vibrate');
        vibrator.vibrate();
    });

    // One seconds vibration
    source.set("oneSecondVibrate", function (eventData) {
        vibrator.vibrate(1000);
        console.log('1 seconds vibrate');
    });

    // Pattern vibration
    source.set("patternVibrate", function (eventData) {
        vibrator.vibrate([1000, 300, 500, 2000]);
        console.log('Pattern vibrate');
    });

    // Cancel vibration
    source.set("cancelVibrate", function (eventData) {
        vibrator.cancel();
        console.log('Cancel vibrate');
    });

    // Has vibrator?
    source.set("hasVibrator", 'Has vibrator?: ' + vibrator.hasVibrator());

    // Set source
    page.bindingContext = source;
}
