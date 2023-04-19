const factories = require("../factories/index.js");
const { Singleton, alias } = require("@anymod/core");
if (jest) jest.useFakeTimers();

const Test = {
  factories,
  fns: {},
};

alias.setAlias("Userfront");

Test.fns.defineSingleton = () => {
  Singleton.initialize();
  Singleton.ready = (cb) => {
    if (cb && typeof cb === "function") cb();
    return Promise.resolve();
  };
};

Test.fns.fireAllScriptOnloads = (document) => {
  if (!document) return;
  const scripts = document.getElementsByTagName("script");
  for (let i = 0; i < scripts.length; i++) {
    if (scripts[i].onload) scripts[i].onload();
  }
};

Test.fns.fireAllLinkOnloads = (document) => {
  if (!document) return;
  const links = document.getElementsByTagName("link");
  for (let i = 0; i < links.length; i++) {
    if (links[i].onload) links[i].onload();
  }
};

Test.fns.fireAllOnloads = (document) => {
  Test.fns.fireAllLinkOnloads(document);
  Test.fns.fireAllScriptOnloads(document);
  if (jest) jest.runAllTimers();
};

if (window) Test.fns.defineSingleton();

export default Test;
