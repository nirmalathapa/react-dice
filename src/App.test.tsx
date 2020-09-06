import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

beforeEach(() => {
  jest.spyOn(global.Math, "random").mockReturnValue(0.893456789);
});

afterEach(() => {
  jest.spyOn(global.Math, "random").mockRestore();
});

test("renders button to roll dice", () => {
  const { getByText, getByTestId } = render(<App />);
  const buttonElement = getByText(/Roll D20/i);
  expect(buttonElement).toBeInTheDocument();
  expect(getByTestId("displayNumber")).toHaveTextContent("");
  userEvent.click(buttonElement);
  expect(getByTestId("displayNumber")).toHaveTextContent("18");
});

test("Renders D12 die", () => {
  const { getByText, getByTestId } = render(<App />);
  const buttonElement = getByText(/Roll D12/i);
  expect(buttonElement).toBeInTheDocument();
  expect(getByTestId("displayNumber")).toHaveTextContent("");
  userEvent.click(buttonElement);
  expect(getByTestId("displayNumber")).not.toHaveTextContent("18");
  expect(getByTestId("displayNumber")).toHaveTextContent("11");
});

test("Renders D10 die", () => {
  const { getByText, getByTestId } = render(<App />);
  const buttonElement = getByText(/Roll D10/i);
  expect(buttonElement).toBeInTheDocument();
  expect(getByTestId("displayNumber")).toHaveTextContent("");
  userEvent.click(buttonElement);
  expect(getByTestId("displayNumber")).not.toHaveTextContent("18");
  expect(getByTestId("displayNumber")).toHaveTextContent("9");
});

test("Renders D6 die", () => {
  const { getByText, getByTestId } = render(<App />);
  const buttonElement = getByText(/Roll D6/i);
  expect(buttonElement).toBeInTheDocument();
  expect(getByTestId("displayNumber")).toHaveTextContent("");
  userEvent.click(buttonElement);
  expect(getByTestId("displayNumber")).not.toHaveTextContent("18");
  expect(getByTestId("displayNumber")).not.toHaveTextContent("9");
  expect(getByTestId("displayNumber")).toHaveTextContent("6");
});

test("Renders D4 die", () => {
  const { getByText, getByTestId } = render(<App />);
  const buttonElement = getByText(/Roll D4/i);
  expect(buttonElement).toBeInTheDocument();
  expect(getByTestId("displayNumber")).toHaveTextContent("");
  userEvent.click(buttonElement);
  expect(getByTestId("displayNumber")).not.toHaveTextContent("18");
  expect(getByTestId("displayNumber")).not.toHaveTextContent("9");
  expect(getByTestId("displayNumber")).not.toHaveTextContent("6");
  expect(getByTestId("displayNumber")).toHaveTextContent("4");
});
