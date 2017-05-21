var Vibrate = require("nativescript-vibrate").Vibrate;
var vibrate = new Vibrate();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(vibrate.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(vibrate.functionname()).toEqual(jasmine.any(Promise));
  });
});