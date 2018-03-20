[![Bazzite Project](https://img.shields.io/badge/Bazzite-project-blue.svg)](https://www.bazzite.com/docs/nativescript-vibrate)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a40541d66db746bcb6669b7f30fd498d)](https://www.codacy.com/app/bazzite/nativescript-vibrate?utm_source=github.com&utm_medium=referral&utm_content=bazzite/nativescript-vibrate&utm_campaign=badger)
[![Travis](https://img.shields.io/travis/bazzite/nativescript-vibrate.svg)](https://travis-ci.org/bazzite/nativescript-vibrate)
[![Dependency Status](https://gemnasium.com/badges/github.com/bazzite/nativescript-vibrate.svg)](https://gemnasium.com/github.com/bazzite/nativescript-vibrate)
[![Open Source Helpers](https://www.codetriage.com/bazzite/nativescript-vibrate/badges/users.svg)](https://www.codetriage.com/bazzite/nativescript-vibrate)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/bazzite/nativescript-vibrate/develop/LICENSE)

# NativeScript Vibrate

A vibrate NativeScript plugin for Android and iOS

## Installation

Run the following command from the root of your project:

```
$ tns plugin add nativescript-vibrate
```

This command automatically installs the necessary files, as well as stores **nativescript-vibrate** as a dependency in your project's **package.json** file.


## Permissions

### Android

To use the vibrate functionality on Android your app must request permission access the vibrator. The plugin automatically adds the required permission shown below for you so you don't need to worry about editing the Android Manifest.

```xml
<uses-permission android:name="android.permission.VIBRATE" />
```

## Usage

To use the vibrate module you must first `require()` it:

```js
var Vibrate = require("nativescript-vibrate").Vibrate;
var vibrator = new Vibrate();
```

If you use Typescript, you can import it this way:

```typescript
import { Vibrate } from 'nativescript-vibrate';
let vibrator = new Vibrate();
```

After you have a reference to the module you can then call its `vibrate(milliseconds)` method.

```js
// my-page.js
vibrator.vibrate(2000);
```

If you prefer to use a vibration pattern, you could try:

```js
// my-page.js
vibrator.vibrate([1000, 300, 500, 2000]);
```

### Notes

#### iOS

There is no API to vibrate for a specific **amount of time** or **vibration pattern**, so it will vibrate for the default period of time no matter what.
