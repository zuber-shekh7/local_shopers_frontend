import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../../store";
import LinkCard from "../LinkCard";

const renderWithRedux = ({ children }) => {
  render(<Provider store={store}>{children}</Provider>);
};

test("should first", () => {
  renderWithRedux(
    <MemoryRouter>
      <LinkCard />
    </MemoryRouter>
  );
});
