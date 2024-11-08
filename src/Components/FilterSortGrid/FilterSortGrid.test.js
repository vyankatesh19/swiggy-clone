import { render, screen } from "@testing-library/react";
import { AppContextProvider } from "../../GlobalContext";
import FilterSortGrid from "./FilterSortGrid";

describe("renders filter section", () => {
  test("renders options and action buttons", () => {
    render(
      <AppContextProvider value={{ state: {}, setState: jest.fn() }}>
        <FilterSortGrid setIsLoading={jest.fn()} />
      </AppContextProvider>
    );
    expect(
      screen.getByRole("button", {
        name: /filter/i,
      })
    ).toBeVisible();
    expect(
      screen.getByRole("button", {
        name: /sort by alphabet/i,
      })
    ).toBeVisible();
  });
});
