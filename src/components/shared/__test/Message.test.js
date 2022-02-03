import { render, screen } from "@testing-library/react";
import Message from "../Message";

test("should first", () => {
  render(<Message />);
  screen.debug();
});

test("shoulf go", () => {
  render(<Message children="hello" />);
  expect(screen.getByText("hello")).toBeInTheDocument;
});
