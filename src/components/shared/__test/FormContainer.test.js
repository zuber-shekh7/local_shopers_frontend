import { render, screen } from "@testing-library/react";
import FormContainer from "../FormContainer";

test("should render first", () => {
  render(<FormContainer />);
  screen.debug();
});

// test("should contains attribites", () => {
//   render(<FormContainer title="hell" />);
//   expect(screen.getByTitle(/hell/)).toBeInTheDocument();
// });
