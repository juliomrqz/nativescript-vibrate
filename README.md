[![Codacy Badge](https://img.shields.io/codacy/grade/a40541d66db746bcb6669b7f30fd498d.svg)](https://www.codacy.com/app/juliomrqz/nativescript-vibrate?utm_source=github.com&utm_medium=referral&utm_content=juliomrqz/nativescript-vibrate&utm_campaign=badger)
[![Travis](https://img.shields.io/travis/juliomrqz/nativescript-vibrate/master.svg)](https://travis-ci.org/juliomrqz/nativescript-vibrate)
[![version](https://img.shields.io/npm/v/nativescript-vibrate.svg)](https://www.npmjs.com/package/nativescript-vibrate)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://marquez.co/docs/nativescript-vibrate/license?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjuliomrqz%2Fnativescript-vibrate.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjuliomrqz%2Fnativescript-vibrate?ref=badge_shield)

# NativeScript Vibrate ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png) 

A vibrate NativeScript plugin for Android and iOS

*Read this in other languages: [English](README.md), [Español][documentation-es]*

## Installation

Run the following command from the root of your project:

```bash
$ ns plugin add nativescript-vibrate
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

- 📄 If you want **extra details** of how to configure and use this plugin, the full documentation is available at [https://marquez.co/docs/nativescript-vibrate][documentation].
- 🐞 For **Bug reports** or **Feature requests**, use the [Issues section][issues].
- 💬 For **questions**, you can also use the [Issues section][issues].
- 🚀 You may also want to [follow me on Twitter][twitter].

### Professional Support

This project is sponsored by me, [a Full Stack Developer][marquez-website]. If you require assistance on your project(s), please contact me at [https://marquez.co][marquez-website].

## Contributing

Please make sure to read the [Contributing Guide][contributing] before making a pull request.

## Code of Conduct

Everyone participating in this project is expected to agree to abide by the [Code of Conduct][code-of-conduct].

## License

Code released under the [MIT License][license-page].

![](https://ga-beacon.appspot.com/UA-65885578-17/juliomrqz/nativescript-vibrate?pixel)



[documentation]: https://marquez.co/docs/nativescript-vibrate?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate
[documentation-es]: https://marquez.co/es/docs/nativescript-vibrate?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate
[contributing]: https://marquez.co/docs/nativescript-vibrate/contributing?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate
[code-of-conduct]: https://www.contributor-covenant.org/version/2/0/code_of_conduct/
[issues]: https://github.com/juliomrqz/nativescript-vibrate/issues
[twitter]: https://twitter.com/juliomrqz
[marquez-website]: https://marquez.co?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate
[license-page]: https://marquez.co/docs/nativescript-vibrate/license?utm_source=github&utm_medium=readme&utm_campaign=nativescript-vibrate


[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fjuliomrqz%2Fnativescript-vibrate.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fjuliomrqz%2Fnativescript-vibrate?ref=badge_large)