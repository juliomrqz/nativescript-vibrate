---
title: Contributing
description: For easier development and debugging purposes continue with the following steps.
order: 2
dateCreated: 2017-08-31T11:46:00-04:00
dateModified: 2017-08-31T11:46:00-04:00
datePublished: 2018-02-27
---

# Contributing

## Development setup

For easier development and debugging purposes continue with the following steps:

1. Open a command prompt/terminal, navigate to `src` folder and run `npm run demo.ios` or `npm run demo.android` to run the demo.
2. Open another command prompt/terminal, navigate to `src` folder and run `npm run plugin.tscwatch` to watch for file changes in the plugin.

Now go and make a change to the plugin. It will be automatically applied to the demo project.


### Unittesting
Open `demo/app/tests/tests.js` and adjust its contents so the tests become meaningful in the context of the plugin and its features.

You can read more about this topic [here](https://docs.nativescript.org/tooling/testing).

Once you're ready to test the plugin's API go to `src` folder and execute one of these commands:

```bash
npm run test.ios
npm run test.android
```

### Clean plugin and demo files

Sometimes you may need to wipe away the `node_modules` and `demo/platforms` folders to reinstall them fresh.

1. Run `npm run clean` to wipe those clean then you can can run `npm i` to install fresh dependencies.


## Submitting Pull Requests

**Please follow these basic steps to simplify pull request reviews - if you don't you'll probably just be asked to anyway.**

* Please rebase your branch against the current master
* Make reference to possible [issues](https://github.com/bazzite/nativescript-vibrate/issues) on PR comment

## Submitting bug reports

* Please detail the affected platform and version
* Please be sure to state which version of node, npm, and NativeScript you're using
