import { render, screen } from "@testing-library/react";
import App from "../../App";
import userEvent from "@testing-library/user-event";

describe("Ages Component", () => {
  test("ages user clicks", async () => {
    render(<App />);
    const leftClick = { button: 0 };
    // user click 'Units' in navbar
    userEvent.click(screen.getByText(/Units/i), leftClick);
    expect(screen.getByText(/Ages/i)).toBeInTheDocument();
    expect(screen.getByText(/Dark/i)).toBeInTheDocument();
    expect(screen.getByText(/Feudal/i)).toBeInTheDocument();
    expect(screen.getByText(/Castle/i)).toBeInTheDocument();
    expect(screen.getByText(/Imperial/i)).toBeInTheDocument();

    //the element with className="hidden" is not visible and added only for test purposes
    userEvent.click(screen.getByText(/Dark/i), leftClick);
    expect(screen.getByTestId("age-value")).toHaveTextContent(/Dark/i);

    userEvent.click(screen.getByText(/Feudal/i), leftClick);
    expect(screen.getByTestId("age-value")).toHaveTextContent(/Feudal/i);

    userEvent.click(screen.getByText(/Castle/i), leftClick);
    expect(screen.getByTestId("age-value")).toHaveTextContent(/Castle/i);

    userEvent.click(screen.getByText(/All/i), leftClick);
    expect(screen.getByTestId("age-value")).toHaveTextContent(/All/i);
  });
});
