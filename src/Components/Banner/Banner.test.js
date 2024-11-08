import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("renders Banner", () => {
  test("renders Banner text", () => {
    render(<Banner />);
    expect(
      screen.getByRole("heading", {
        name: /what are your favorite cuisines\?/iu,
      })
    ).toBeVisible();
    expect(
      screen.getByText("Personalize your experience with swiggy...")
    ).toBeVisible();
  });
});
