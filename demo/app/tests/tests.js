var Vibrate = require("nativescript-vibrate").Vibrate;
var vibrate = new Vibrate();

describe("greet function", function () {
    it("exists", function () {
        expect(vibrate.greet).toBeDefined();
    });

    it("returns a string", function () {
        expect(vibrate.greet()).toEqual("Hello, NS");
    });
});