import { render } from "@testing-library/react";
import App from "./App";

test("renders app snapshot", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
