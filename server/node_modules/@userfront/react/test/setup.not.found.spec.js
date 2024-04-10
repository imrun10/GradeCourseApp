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

  it("Should add AnyMod Script 1 and should make a POST request if a page is not found", async () => {
    const mod = Test.factories.mods.plainjs;
    const tenantId = "b2c3d4e5";
    const page = {
      id: 101,
      host: "example.com",
      pathname: "/page.html",
      mods: { plainjs: mod },
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

    // Mock the page not being found
    window.AnyModPageJs = {
      page: {
        error: "Not Found",
        message: "Not Found",
        statusCode: 404,
      },
    };
    const el = document.querySelector(
      `script[src^="https://cdn.userfront.com/toolkit/page/${tenantId}/"]`
    );
    el.onload();

    // Mock the page being found
    expect(crud.post).toHaveBeenCalledWith([mod.eid]);
  });
});
