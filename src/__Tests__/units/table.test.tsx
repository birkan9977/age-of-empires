import { render, screen, cleanup } from "@testing-library/react";
import App from "../../App";
import userEvent from "@testing-library/user-event";

const leftClick = { button: 0 };
afterEach(() => {
  cleanup();
});

describe("Table tests", () => {
  test("Table exists", () => {
    render(<App />);
    userEvent.click(screen.getByText(/Units/i), leftClick);
    const table = screen.getByTestId("table");
    expect(table).toBeInTheDocument();
    cleanup();
  });
});
