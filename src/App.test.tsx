import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app and finds home nav link", () => {
  render(<App />);
  const homeLinkElement = screen.getByRole(/navlink-home$/i);
  expect(homeLinkElement).toBeInTheDocument();
  
});

test("renders app and finds units nav link", () => {
  render(<App />);
  const unitsLinkElement = screen.getByRole(/navlink-units$/i);
  expect(unitsLinkElement).toBeInTheDocument();
});

