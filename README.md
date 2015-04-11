# NativeScript Vibrate

A vibrate NativeScript module for Android and iOS

### Android

To use the vibrate functionality on Android your app must request permission access the vibrator. To do so, add the following line to your project's AndroidManifest.xml

```xml
<uses-permission android:name="android.permission.VIBRATE" />
```

### iOS

There is no API to vibrate for a specific amount of time, so it will vibrate for the default no matter what (the duration is ignored).