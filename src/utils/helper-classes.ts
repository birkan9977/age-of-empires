//credit goes to poky for the below class to mock the slider input...
//https://stackoverflow.com/questions/58856094/testing-a-material-ui-slider-with-testing-library-react
import { fireEvent } from "@testing-library/react";

export class Slider {
  private static height = 10;

  // For simplicity pretend that slider's width is 100
  private static width = 100;

  private static getBoundingClientRectMock() {
    return {
      bottom: Slider.height,
      height: Slider.height,
      left: 0,
      right: Slider.width,
      top: 0,
      width: Slider.width,
      x: 0,
      y: 0,
    } as DOMRect;
  }

  static change(
    element: HTMLElement,
    value: number,
    min: number = 0,
    max: number = 200
  ) {
    const getBoundingClientRect = element.getBoundingClientRect;
    element.getBoundingClientRect = Slider.getBoundingClientRectMock;
    fireEvent.mouseDown(element, {
      clientX: ((value - min) / (max - min)) * Slider.width,
      clientY: Slider.height,
    });
    element.getBoundingClientRect = getBoundingClientRect;
  }
}
