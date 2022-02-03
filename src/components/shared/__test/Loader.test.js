import { render, screen } from "@testing-library/react";
import Loader from "../Loader";

test("should first", () => {
  render(<Loader />);
  screen.debug();
});

test("should first", () => {
  render(<Loader />);
  expect(screen.getAllByText("Loading...")).toBeDefined();
});
