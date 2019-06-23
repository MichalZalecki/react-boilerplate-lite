import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("adds bang after making a bang", () => {
    const { container, getByTestId } = render(<App />);
    expect(getByTestId("title").textContent).toEqual("Hello, World!");
    fireEvent.click(container.querySelector("#bang"));
    fireEvent.click(container.querySelector("#bang"));
    expect(getByTestId("title").textContent).toEqual("Hello, World!!!");
  });
});
