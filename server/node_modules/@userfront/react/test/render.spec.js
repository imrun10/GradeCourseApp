import React from "react";
import { render, waitFor } from "@testing-library/react";
import Test from "./config/test.utils.js";
import core from "@anymod/core";
const { utils, crud } = core;

import Toolkit from "../src/index.js";

const scope = {};

const Signup = Toolkit.build({
  toolId: Test.factories.mods.basic.key,
});

describe("Render a signup form", () => {
  beforeAll(() => {
    // Mock the loading of page assets
    scope.loadMock = jest.fn();
    scope.loadFn = utils.loadPageAssets;
    utils.loadPageAssets = (a, b) => {
      scope.loadMock(a, b);
      return scope.loadFn(a, b);
    };
    // Mock the post request to get the page
    scope.postFn = jest.fn();
    crud.post = async (a) => {
      scope.postFn(a);
      return Test.factories.pages.basic;
    };
  });

  it("should make a proper request to the endpoint", async () => {
    render(<Signup />);
    await waitFor(() => {
      expect(scope.postFn).toHaveBeenCalled();
    });
    expect(scope.postFn).toHaveBeenCalledWith([Test.factories.mods.basic.eid]);
  });

  it("should render a signup form and its assets if no page exists yet", async () => {
    render(<Signup />);
    Test.fns.fireAllOnloads(document);
    await waitFor(() => {
      expect(scope.loadMock).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(document.body.innerHTML).toContain(
        Test.factories.mods.basic.html.replace(/(<div>)|(<\/div>)/g, "")
      );
      expect(document.head.innerHTML).toContain(Test.factories.mods.basic.css);
    });
  });
});
