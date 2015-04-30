# NativeScript Vibrate

A vibrate NativeScript module for Android and iOS

## Installation

Run `npm install nativescript-vibrate --save` from your project's inner `app` directory:

```
.
├── app
│   ├── app <------------------------------ run npm install from here
│   │   ├── app.css
│   │   ├── app.js
│   │   ├── bootstrap.js
│   │   ├── main-page.js
│   │   ├── main-page.xml
│   │   ├── node_modules
│   │   │   └── nativescript-vibrate <-- The install will place the module's code here
│   │   │       └── ...
│   │   └── package.json <----------------- The install will register “nativescript-vibrate” as a dependency here
│   └── tns_modules
│       └── ...
└── platforms
    ├── android
    └── ios
```

As is, using npm within NativeScript is still experimental, so it's possible that you'll run into some issues. A more complete solution is in the works, and you can check out [this issue](https://github.com/NativeScript/nativescript-cli/issues/362) for an update on its progress and to offer feedback.

If npm doesn't end up working for you, you can just copy and paste this repo's vibrate.android.js and vibrate.ios.js files into your app and reference them directly.

### Android

To use the vibrate functionality on Android your app must request permission access the vibrator. To do so, add the following line to your project's AndroidManifest.xml

```xml
<uses-permission android:name="android.permission.VIBRATE" />
```

### iOS

There is no API to vibrate for a specific amount of time, so it will vibrate for the default no matter what (the duration is ignored).