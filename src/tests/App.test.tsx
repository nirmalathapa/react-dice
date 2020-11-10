import React from "react";
import { render } from "@testing-library/react";
import App from "../App/App";

beforeEach(() => {
  jest.spyOn(global.Math, "random").mockReturnValue(0.893456789);
});

afterEach(() => {
  jest.spyOn(global.Math, "random").mockRestore();
});

test("Dungeons & Dragons Dice Roller", () => {
  render(<App />);
});
