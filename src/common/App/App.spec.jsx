import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";


describe("App", () => {
  it("adds bang after making a bang", () => {
    const tree = shallow(<App />);
    expect(tree.find("h1").text()).toEqual("Hello, World!");
    tree.find("#bang").simulate("click");
    tree.find("#bang").simulate("click");
    expect(tree.find("h1").text()).toEqual("Hello, World!!!");
  });
});
