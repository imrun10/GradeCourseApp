describe("SSR", () => {
  it("should import core without window object", () => {
    delete global.window;
    const core = require("../src/index.js");
    expect("This test to pass if the import above worked").toBeTruthy();
  });
});
