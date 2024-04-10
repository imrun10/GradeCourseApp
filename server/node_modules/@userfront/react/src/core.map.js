const core =
  process.env.NODE_ENV === "test"
    ? require("../../../../AnyMod/npm/anymod-core/src/index.js")
    : require("@anymod/core");

module.exports = core;
export default core;
