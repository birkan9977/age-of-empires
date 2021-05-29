import { render, screen } from "@testing-library/react";
import App from "./App";
import reducers from "./redux/reducers";
import { State } from "./types/general-types";

describe("Page Tests", function () {
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
});

describe("Redux Filter Tests", function () {
  test("age filter", () => {
    let state = reducers(
      {
        filterReducer: {
          age: { title: "All", selectionIndex: 0 },
          cost: [
            { name: "wood", amount: 20, enabled: false },
            { name: "food", amount: 20, enabled: false },
            { name: "gold", amount: 20, enabled: false },
          ],
        },
      },
      {
        type: "CHANGE_AGE_FILTER",
        payload: { title: "Castle", selectionIndex: 3 },
      }
    );
    expect(state).toEqual({
      filterReducer: {
        age: { title: "Castle", selectionIndex: 3 },
        cost: [
          { name: "wood", amount: 20, enabled: false },
          { name: "food", amount: 20, enabled: false },
          { name: "gold", amount: 20, enabled: false },
        ],
      },
    });
  });

  test("cost filter", () => {
    let state = reducers(
      {
        filterReducer: {
          age: { title: "All", selectionIndex: 0 },
          cost: [
            { name: "wood", amount: 20, enabled: true },
            { name: "food", amount: 20, enabled: false },
            { name: "gold", amount: 20, enabled: false },
          ],
        },
      },
      {
        type: "CHANGE_COST_FILTER",
        payload: [
          { name: "wood", amount: 75, enabled: true },
          { name: "food", amount: 20, enabled: false },
          { name: "gold", amount: 20, enabled: false },
        ],
      }
    );
    expect(state).toEqual({
      filterReducer: {
        age: { title: "All", selectionIndex: 0 },
        cost: [
          { name: "wood", amount: 75, enabled: true },
          { name: "food", amount: 20, enabled: false },
          { name: "gold", amount: 20, enabled: false },
        ],
      },
    });
  });
});
