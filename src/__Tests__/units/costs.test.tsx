import { render, screen, cleanup } from "@testing-library/react";
import App from "../../App";
import userEvent from "@testing-library/user-event";
import mockApi from "../../services/mockapi-delay";
import { Slider } from "../../utils/helper-classes";

const leftClick = { button: 0 };
const delay: number = 100;
afterEach(() => {
  cleanup();
});
describe("Cost Component - user clicks input:", () => {
  test("wood checkbox", () => {
    render(<App />);
    userEvent.click(screen.getByText(/Units/i), leftClick);
    const checkbox = screen.getByTestId("wood-input");
    userEvent.click(checkbox, leftClick);
    expect(checkbox).toBeChecked();
    userEvent.click(checkbox, leftClick);
    expect(checkbox).not.toBeChecked();
    cleanup();
  });
  test("food checkbox", () => {
    render(<App />);
    const checkbox = screen.getByTestId("food-input");
    userEvent.click(checkbox, leftClick);
    expect(checkbox).toBeChecked();
    userEvent.click(checkbox, leftClick);
    expect(checkbox).not.toBeChecked();
    cleanup();
  });
  test("gold checkbox", () => {
    render(<App />);
    const checkbox = screen.getByTestId("gold-input");
    userEvent.click(checkbox, leftClick);
    expect(checkbox).toBeChecked();
    userEvent.click(checkbox, leftClick);
    expect(checkbox).not.toBeChecked();
    cleanup();
  });
});

describe("Sliders and their Labels", () => {
  test("wood slider", async () => {
    render(<App />);
    userEvent.click(screen.getByText(/Castle/i), leftClick);
    const checkbox = screen.getByTestId("wood-input");
    userEvent.click(checkbox, leftClick);
    expect(checkbox).toBeChecked();
    const slider = screen.getByTestId("wood-slider-input");
    expect(slider).toBeInTheDocument();
    const rangeMin = 15;
    Slider.change(slider, rangeMin, 0, 200);
    const rangeMax = 175;
    Slider.change(slider, rangeMax, 0, 200);
    expect(screen.getByTestId("wood-slider-label")).toHaveTextContent(
      `${rangeMin - 1} - ${rangeMax - 1}`
    );
    await mockApi(delay).then(() => {
      const records = screen.getByTestId("number-of-records");
      expect(records).toHaveTextContent("37");
    });
    cleanup();
  });
  test("food slider", async () => {
    render(<App />);
    userEvent.click(screen.getByText(/Feudal/i), leftClick);
    const checkbox = screen.getByTestId("food-input");
    userEvent.click(checkbox, leftClick);
    expect(checkbox).toBeChecked();
    const slider = screen.getByTestId("food-slider-input");
    expect(slider).toBeInTheDocument();
    const rangeMin = 15;
    const rangeMax = 175;
    Slider.change(slider, rangeMin, 0, 200);
    Slider.change(slider, rangeMax, 0, 200);
    expect(screen.getByTestId("food-slider-label")).toHaveTextContent(
      `${rangeMin - 1} - ${rangeMax - 1}`
    );
    await mockApi(delay).then(() => {
      const records = screen.getByTestId("number-of-records");
      expect(records).toHaveTextContent("7");
    });
    cleanup();
  });
  test("gold slider", async () => {
    render(<App />);
    userEvent.click(screen.getByText(/Castle/i), leftClick);
    const checkbox = screen.getByTestId("gold-input");
    userEvent.click(checkbox, leftClick);
    expect(checkbox).toBeChecked();
    const slider = screen.getByTestId("gold-slider-input");
    expect(slider).toBeInTheDocument();
    const rangeMin = 15;
    Slider.change(slider, rangeMin, 0, 200);
    const rangeMax = 175;
    Slider.change(slider, rangeMax, 0, 200);
    //toBeWithinRange(10,20);
    expect(screen.getByTestId("gold-slider-label")).toHaveTextContent(
      `${rangeMin - 1} - ${rangeMax - 1}`
    );
    await mockApi(delay).then(() => {
      const records = screen.getByTestId("number-of-records");
      expect(records).toHaveTextContent("36");
    });
    cleanup();
  });
});
