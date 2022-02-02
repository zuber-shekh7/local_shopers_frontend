import { render, screen } from "@testing-library/react";
import ModalForm from "../ModalForm";

test("should first", () => {
  render(<ModalForm />);
  screen.debug();
});
