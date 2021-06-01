import { render, screen } from "@testing-library/react";
import App from "../../App";
import userEvent from "@testing-library/user-event";

describe("Units Page", function () {
  test("navigating", () => {
    render(<App />);
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();

    const leftClick = { button: 0 };
    // user click 'Units' in navbar
    userEvent.click(screen.getByText(/Units/i), leftClick);
    expect(screen.getByText(/Units Page/i)).toBeInTheDocument();

    //get header units from data-testid
    let element = screen.getByRole("heading", { level: 1 });
    expect(element).toHaveTextContent("Units Page");

    // user click 'Home' in navbar
    userEvent.click(screen.getByText(/Home/i), leftClick);
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();

    //header home
    element = screen.getByRole("heading", { level: 1 });
    expect(element).toHaveTextContent("Home Page");
  });
});
