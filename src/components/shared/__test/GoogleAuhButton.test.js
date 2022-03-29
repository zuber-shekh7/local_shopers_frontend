import { render, screen } from "@testing-library/react";
import GoogleAuthButton from "../GoogleAuthButton";

test("should first", () => {
  render(<GoogleAuthButton />);
  screen.debug();
});

test("test", () => {
  render(<GoogleAuthButton />);
  expect(screen.getByText("Continue with Google")).toBeInTheDocument;
});

test("is button", () => {
  render(<GoogleAuthButton />);
  expect(screen.getByRole("button")).toBeInTheDocument;
});
