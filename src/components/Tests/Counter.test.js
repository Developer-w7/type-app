import Counter from "./Counter";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { useState } from "react";


function sum(a, b) {
    return a + b;
  }
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

describe("Counter", () => {
  test("renders Counter component", () => {
    render(<Counter  initialCount= {0}/>);
    const incrementButton = screen.getByText(/Increment Button/i);
    expect(incrementButton).toBeInTheDocument();
  });

  test("increments count on button click", async () => {
    render(<Counter initialCount= {0} />);
    const incrementButton = screen.getByText(/Increment Button/i);
    const countDisplay = screen.getByTestId("count-display");

    await act(async () => {
      userEvent.click(incrementButton);
      
    });

    await act(async () => {
        userEvent.click(incrementButton);
        
      });

    expect(countDisplay.textContent).toBe("Count: 2");
  });


});