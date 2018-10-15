var Vibrate = require("nativescript-vibrate").Vibrate;
var vibrate = new Vibrate();

describe("vibrate function", function () {
    it("exists", function () {
        expect(vibrate.vibrate).toBeDefined();
    });
});

describe("cancel function", function () {
    it("exists", function () {
        expect(vibrate.cancel).toBeDefined();
    });
});

describe("hasVibrator function", function () {
    it("exists", function () {
        expect(vibrate.hasVibrator).toBeDefined();
    });

    it("returns a boolean", function () {
        expect(vibrate.hasVibrator()).toBeDefined();
    });
});