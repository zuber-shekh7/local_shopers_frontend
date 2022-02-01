import { render, screen } from "@testing-library/react";
import ModalForm from "../ModalForm";

test("should first", () => {
  render(<ModalForm />);
  screen.debug();
});

test("Shoulh Firt", () => {
  render(<ModalForm props={((subject = "subject"), (message = "message"))} />);
  expect(screen.getByText("hello")).toBeDefined();
  ex;
});
