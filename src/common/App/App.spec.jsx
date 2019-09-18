import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { App } from "./App";

afterEach(cleanup);

describe("App", () => {
  it("adds bang after making a bang", () => {
    const { container, getByTestId } = render(<App />);
    expect(getByTestId("title").textContent).toEqual("Hello, World!");
    fireEvent.click(container.querySelector("#bang"));
    fireEvent.click(container.querySelector("#bang"));
    expect(getByTestId("title").textContent).not.toEqual("Hello, World!!!");
  });

  it("adds bang after making a bang", () => {
    const { container, getByTestId } = render(<App />);
    expect(getByTestId("title").textContent).toEqual("Hello, World!");
    fireEvent.click(container.querySelector("#bang"));
    fireEvent.click(container.querySelector("#bang"));
    expect(getByTestId("title").textContent).toEqual("Hello, World!!!");
  });
});
