import React from "react";
import { render } from "@testing-library/react";
import Test from "./config/test.utils.js";
import AnyMod, { Singleton } from "@anymod/core";
import Userfront from "../src/index.js";
const { crud } = AnyMod;

describe("Assert that page was properly set up", () => {
  beforeEach(async () => {
    Singleton.Page = {};
    document.head.innerHTML = Test.factories.document.headInnerHtml;
    Singleton.initialize();
  });

  it("Should add AnyMod Script 1 and should not make a POST request if a page is found", async () => {
    const mod = Test.factories.mods.basic;
    const tenantId = "a1b2c3d4";
    const page = {
      id: 101,
      host: "example.com",
      pathname: "/page.html",
      mods: { basic: mod },
    };
    crud.post = jest.fn(() => Promise.resolve({}));

    // Navigate to next page
    window.history.pushState({}, "Page title", page.pathname);

    // Initialize the form
    Userfront.init(tenantId);
    const Signup = Userfront.build({
      toolId: mod.eid,
    });
    render(<Signup />);

    // Assert correct setup
    expect(Singleton.External.name).toEqual("Userfront");
    expect(Singleton.External.project).toEqual(tenantId);

    // Assert Script 1 in head
    expect(document.head.innerHTML).toContain(
      `src="https://cdn.userfront.com/toolkit/page/${tenantId}/`
    );

    // Mock the page being found
    window.AnyModPageJs = {
      page: {
        id: page.id,
        host: page.host,
        pathname: page.pathname,
        cssAssets: [],
        jsAssets: [],
        mods: page.mods,
      },
    };
    const el = document.querySelector(
      `script[src^="https://cdn.userfront.com/toolkit/page/${tenantId}/"]`
    );
    el.onload();

    expect(crud.post).not.toHaveBeenCalled();
  });
});
