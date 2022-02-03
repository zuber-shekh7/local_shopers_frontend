import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../../store";
import CategoryItem from "../CategoryItem";

const renderWithRedux = ({ children }) =>
  render(<Provider store={store}>{children}</Provider>);

test("Category Item should render first", () => {
  renderWithRedux(
    <MemoryRouter>
      <CategoryItem />
    </MemoryRouter>
  );
});
