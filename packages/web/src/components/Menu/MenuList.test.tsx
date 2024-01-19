import { render } from "@testing-library/react";
import MenuList from "./MenuList";

test("renders MenuList component", () => {
  const menuNames = ["Egg", "Rice"];
  render(<MenuList menuNames={menuNames} />);
});
