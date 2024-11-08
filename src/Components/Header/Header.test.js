import { render, screen } from "@testing-library/react";
import Header from "./Header";
describe("renders header", () => {
  test("renders searchbox", () => {
    render(<Header />);
    expect(
      screen.getByRole("searchbox", {
        name: /search/i,
      })
    ).toBeVisible();
  });
});
