var vibrator = require("./node_modules/nativescript-vibrate/vibrate");
var observable = require("data/observable");

var mainViewModel = new observable.Observable();
mainViewModel.vibrateAction = function () {
   vibrator.vibration(2000);
};
exports.mainViewModel = mainViewModel;