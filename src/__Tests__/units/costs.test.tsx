import { render, screen } from "@testing-library/react";
import App from "../../App";
import userEvent from "@testing-library/user-event";
import mockApi from "../../services/mockapi-delay";
import { Slider } from "../../utils/helper-classes";

const leftClick = { button: 0 };
const delay: number = 200;
describe("Cost Component - user clicks input:", () => {
  test("wood checkbox", () => {
    render(<App />);
    userEvent.click(screen.getByText(/Units/i), leftClick);
    const checkbox = screen.getByTestId("wood-input");
    userEvent.click(checkbox, leftClick);
    expect(checkbox).toBeChecked();
    userEvent.click(checkbox, leftClick);
    expect(checkbox).not.toBeChecked();
  });
  test("food checkbox", () => {
    render(<App />);
    const checkbox = screen.getByTestId("food-input");
    userEvent.click(checkbox, leftClick);
    expect(checkbox).toBeChecked();
    userEvent.click(checkbox, leftClick);
    expect(checkbox).not.toBeChecked();
  });
  test("gold checkbox", () => {
    render(<App />);
    const checkbox = screen.getByTestId("gold-input");
    userEvent.click(checkbox, leftClick);
    expect(checkbox).toBeChecked();
    userEvent.click(checkbox, leftClick);
    expect(checkbox).not.toBeChecked();
  });
});

describe("Sliders and their Labels", () => {
  test("wood slider", async () => {
    render(<App />);
    const checkbox = screen.getByTestId("wood-input");
    userEvent.click(checkbox, leftClick);
    expect(checkbox).toBeChecked();
    const slider = screen.getByTestId("wood-slider-input");
    expect(slider).toBeInTheDocument();
    // mock the getBoundingClientRect with the below class
    Slider.change(slider, 70, 0, 200);
    expect(screen.getByTestId("wood-slider-label")).toHaveTextContent("70");
    userEvent.click(screen.getByText(/Castle/i), leftClick);
    // wait for redux to update state...
    await mockApi(delay);
    const records = screen.getByTestId("number-of-records");
    expect(records).toHaveTextContent("33");
  });
  test("food slider", async () => {
    render(<App />);
    const checkbox = screen.getByTestId("food-input");
    userEvent.click(checkbox, leftClick);
    expect(checkbox).toBeChecked();
    const slider = screen.getByTestId("food-slider-input");
    expect(slider).toBeInTheDocument();
    Slider.change(slider, 40, 0, 200);
    expect(screen.getByTestId("food-slider-label")).toHaveTextContent("40");
    userEvent.click(screen.getByText(/Feudal/i), leftClick);
    // wait for redux to update state...
    await mockApi(delay);
    const records = screen.getByTestId("number-of-records");
    expect(records).toHaveTextContent("7");
  });
  test("gold slider", async () => {
    render(<App />);
    const checkbox = screen.getByTestId("gold-input");
    userEvent.click(checkbox, leftClick);
    expect(checkbox).toBeChecked();
    const slider = screen.getByTestId("gold-slider-input");
    expect(slider).toBeInTheDocument();
    Slider.change(slider, 32, 0, 200);
    expect(screen.getByTestId("gold-slider-label")).toHaveTextContent("32");
    userEvent.click(screen.getByText(/Dark/i), leftClick);
    // wait for redux to update state...
    await mockApi(delay).then(() => {
      const records = screen.getByTestId("number-of-records");
      expect(records).toHaveTextContent("13");
    });
  });
});
