import { render, screen } from "@testing-library/react";
import App from "../App";
import reducers from "../redux/reducers";
import { FilterState } from "../types/general-types";

describe("Home Page", function () {
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

describe("Redux Filter", function () {
  test("age filter", () => {
    let state = reducers(
      {
        dataReducer: {},
        filterReducer: {
          age: { title: "All", selectionIndex: 0 },
          cost: [
            { name: "wood", amount: [20, 100], enabled: false },
            { name: "food", amount: [20, 100], enabled: false },
            { name: "gold", amount: [20, 100], enabled: false },
          ],
        } as FilterState,
      },
      {
        type: "CHANGE_AGE_FILTER",
        payload: { title: "Castle", selectionIndex: 3 },
      }
    );
    expect(state).toEqual({
      dataReducer: {},
      filterReducer: {
        age: { title: "Castle", selectionIndex: 3 },
        cost: [
          { name: "wood", amount: [20, 100], enabled: false },
          { name: "food", amount: [20, 100], enabled: false },
          { name: "gold", amount: [20, 100], enabled: false },
        ],
      } as FilterState,
    });
  });

  test("cost filter", () => {
    let state = reducers(
      {
        dataReducer: {},
        filterReducer: {
          age: { title: "All", selectionIndex: 0 },
          cost: [
            { name: "wood", amount: [20, 100], enabled: true },
            { name: "food", amount: [20, 100], enabled: false },
            { name: "gold", amount: [20, 100], enabled: false },
          ],
        } as FilterState,
      },
      {
        type: "CHANGE_COST_FILTER",
        payload: [
          { name: "wood", amount: [75, 120], enabled: true },
          { name: "food", amount: [20, 100], enabled: false },
          { name: "gold", amount: [20, 100], enabled: false },
        ],
      }
    );
    expect(state).toEqual({
      dataReducer: {},
      filterReducer: {
        age: { title: "All", selectionIndex: 0 },
        cost: [
          { name: "wood", amount: [75, 120], enabled: true },
          { name: "food", amount: [20, 100], enabled: false },
          { name: "gold", amount: [20, 100], enabled: false },
        ],
      } as FilterState,
    });
  });
});
