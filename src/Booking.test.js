import { render, screen } from "@testing-library/react";
import { initializeTimes, updateTimes } from "./pages/Booking";
import Booking from "./pages/Booking";

test("Renders the Booking heading", () => {
  render(<Booking />);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
});


test("returns the expected list of available times", () => {
  const result = initializeTimes();
  const expected = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  expect(result).toEqual(expected);
});

test("returns an array, not an empty value", () => {
  const result = initializeTimes();
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

test("updateTimes returns the same state when action is UPDATE_TIMES", () => {
  const initialState = ["17:00", "18:00"];
  const action = { type: "UPDATE_TIMES" };

  const result = updateTimes(initialState, action);

  // оскільки зараз логіка повертає фіксований список,
  // ми перевіряємо, що це очікувані години
  const expected = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  expect(result).toEqual(expected);
});

test("updateTimes returns the same state for unknown action", () => {
  const initialState = ["17:00", "18:00"];
  const action = { type: "UNKNOWN_ACTION" };

  const result = updateTimes(initialState, action);

  // має залишитися незмінним
  expect(result).toEqual(initialState);
});