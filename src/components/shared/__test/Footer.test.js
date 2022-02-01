import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

test("Shared Footer should render first", () => {
  render(<Footer />);
  screen.debug();
});

test("Shared Footer Data should show", () => {
  render(<Footer />);
  const footEl = screen.getByText(/2022/i);
  expect(footEl).toBeDefined();
});
