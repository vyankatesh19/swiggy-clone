import { render, screen } from "@testing-library/react";
import { AppContextProvider } from "../../GlobalContext";
import FilterModal from "./FilterModal";

describe("renders filter modal", () => {
  test("renders options and action buttons", () => {
    render(
      <AppContextProvider value={{ state: {} }}>
        <FilterModal
          areaList={[
            {
              strArea: "American",
            },
          ]}
          show={true}
        />
      </AppContextProvider>
    );
    expect(screen.getByText("Filter By Area")).toBeVisible();
    expect(
      screen.getByRole("radio", {
        name: /american/i,
      })
    ).toBeVisible();
    expect(
      screen.getByRole("button", {
        name: /clear filter/i,
      })
    ).toBeVisible();
    expect(
      screen.getByRole("button", {
        name: /apply/i,
      })
    ).toBeVisible();
  });
});
