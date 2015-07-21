# NativeScript Vibrate

A vibrate NativeScript plugin for Android and iOS

## Installation

Run the following command from the root of your project:

```
$ tns plugin add nativescript-vibrate
```

This command automatically installs the necessary files, as well as stores nativescript-texttospeech as a dependency in your project's package.json file.

Due to a current open issue with NativeScript, [#669](https://github.com/NativeScript/nativescript-cli/issues/669), the plugin needs to be added before adding any platforms with the `tns add platform` command.

## Permissions

### Android

To use the vibrate functionality on Android your app must request permission access the vibrator. The plugin automatically adds the required permission shown below for you so you don't need to worry about editing the Android Manifest.

```xml
<uses-permission android:name="android.permission.VIBRATE" />
```

## Usage

To use the vibrate module you must first `require()` it:

```js
var vibrator = require("nativescript-vibrate");
```

After you have a reference to the module you can then call its `vibration(milliseconds)` method.

```js
// my-page.js
var vibrator = require("nativescript-vibrate");
vibrator.vibration(2000);
```

### Notes

#### iOS

There is no API to vibrate for a specific amount of time, so it will vibrate for the default no matter what (the duration is ignored).

## TODO

- [ ] Add support for vibration patterns in Android (iOS does not support this feature)