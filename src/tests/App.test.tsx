import React from "react";
import { cleanup, render } from "@testing-library/react";
import App from "../App/App";

afterEach(cleanup);

test("Title text", () => {
  const { getByText } = render(<App />);
  expect(getByText("Dungeons & Dragons Dice Roller")).toBeInTheDocument();
});

test("Button text", () => {
  const { getByText, asFragment } = render(<App />);
  expect(getByText("Roll a Die")).toBeInTheDocument();
});
