import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("adds bang after making a bang", () => {
    const root = render(<App />);
    expect(root.getByText(/Hello, World/).textContent).toEqual("Hello, World!");
    fireEvent.click(root.getByRole("button", { name: "Bang!" }));
    fireEvent.click(root.getByRole("button", { name: "Bang!" }));
    expect(root.getByText(/Hello, World/).textContent).toEqual("Hello, World!!!");
  });
});
