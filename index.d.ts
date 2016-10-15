declare module 'nativescript-vibrate' {
	/**
	 *iOS - There is no API to vibrate for a specific amount of time, so it will vibrate for the default no matter what (the duration is ignored)
	 */
	export function vibration(milliseconds: number);
}
