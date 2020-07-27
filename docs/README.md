---
title: "Overview"
description: "A vibrate NativeScript plugin for Android and iOS"
createdAt: "2015-04-11T12:25:00Z"
publishedAt: "2018-02-27T16:27:00Z"
updatedAt: "2020-07-17T21:52:22Z"
position: 1
category: "Getting started"
---

# NativeScript Vibrate

A vibrate NativeScript plugin for Android and iOS

## Installation

Run the following command from the root of your project:

```bash
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
var Vibrate = require('nativescript-vibrate').Vibrate;
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

## API

Only one method is available: `vibrate().` Below are all the supported properties you can play around:

<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr>
        <th style="text-align:center">Property</th>
        <th style="text-align:center">Default</th>
        <th style="text-align:center">Description</th>
        <th style="text-align:center">Android</th>
        <th style="text-align:center">iOS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align:center">time</td>
        <td style="text-align:center">300</td>
        <td style="text-align:center">The number of milliseconds to vibrate. It can be also an array of longs of times for which to turn the vibrator on
          or off.</td>
        <td style="text-align:center">✔︎</td>
        <td style="text-align:center">✘</td>
      </tr>
      <tr>
        <td style="text-align:center">repeat</td>
        <td style="text-align:center">-1</td>
        <td style="text-align:center">The index into pattern at which to repeat, or -1 if you don't want to repeat.</td>
        <td style="text-align:center">✔︎</td>
        <td style="text-align:center">✘</td>
      </tr>
    </tbody>
  </table>
</div>
