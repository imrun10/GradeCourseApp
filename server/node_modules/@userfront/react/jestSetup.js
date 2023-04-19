const React = require("react");

const expectedReactVersion = process.env.REACT_VERSION && `${process.env.REACT_VERSION}`;

if (expectedReactVersion && !React.version.startsWith(expectedReactVersion)) {
  throw new Error(`Wrong React version. Expected ^${expectedReactVersion}, got ${React.version}`)
}