[![Bazzite Project](https://img.shields.io/badge/Bazzite-project-blue.svg)](https://www.bazzite.com/docs/nativescript-vibrate?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate)
[![Codacy Badge](https://img.shields.io/codacy/grade/a40541d66db746bcb6669b7f30fd498d.svg)](https://www.codacy.com/app/bazzite/nativescript-vibrate?utm_source=github.com&utm_medium=referral&utm_content=bazzite/nativescript-vibrate&utm_campaign=badger)
[![Travis](https://img.shields.io/travis/bazzite/nativescript-vibrate/master.svg)](https://travis-ci.org/bazzite/nativescript-vibrate)
[![version](https://img.shields.io/npm/v/nativescript-vibrate.svg)](https://www.npmjs.com/package/nativescript-vibrate)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://www.bazzite.com/docs/nativescript-vibrate/license?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fbazzite%2Fnativescript-vibrate.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fbazzite%2Fnativescript-vibrate?ref=badge_shield)

# NativeScript Vibrate

A vibrate NativeScript plugin for Android and iOS

*Read this in other languages: [English](README.md), [Español](README.es.md)*

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

## Example of use

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

## API

Only one method is available: `vibrate().` Below are all the supported properties you can play around.

| Property | Default | Description | Android | iOS |
| :-: | :-: | :-: | :-: | :-: |
| time | 300 | The number of milliseconds to vibrate. It can be also an array of longs of times for which to turn the vibrator on or off. | ✔︎ | ✘ |
| repeat | -1 | The index into pattern at which to repeat, or -1 if you don't want to repeat. | ✔︎ | ✘ |

## Documentation & Support

If you want extra details of how to configure and use this plugin, the full documentation is available at [https://www.bazzite.com/docs/nativescript-vibrate][documentation].

For questions and support, use the [Issues section][issues].

You may also want to [follow the company supporting this project on Twitter][twitter].

### Commercial Support

This project is sponsored by [Bazzite][bazzite-website]. If you require assistance on your project(s), please contact us at [https://www.bazzite.com/contact][contact-page].

## Contributing

Please make sure to read the [Contributing Guide][contributing] before making a pull request.

## Code of Conduct

Everyone participating in this project is expected to agree to abide by the [Code of Conduct][code-of-conduct].

## License

Code released under the [MIT License][license-page].


[documentation]: https://www.bazzite.com/docs/nativescript-vibrate?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate
[contributing]: https://www.bazzite.com/docs/nativescript-vibrate/contributing?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate
[code-of-conduct]: https://www.bazzite.com/open-source/code-of-conduct?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate
[issues]: https://github.com/bazzite/nativescript-vibrate/issues
[twitter]: https://twitter.com/BazziteTech
[bazzite-website]: https://www.bazzite.com?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate
[contact-page]: https://www.bazzite.com/contact?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate
[license-page]: https://www.bazzite.com/docs/nativescript-vibrate/license?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fbazzite%2Fnativescript-vibrate.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fbazzite%2Fnativescript-vibrate?ref=badge_large)