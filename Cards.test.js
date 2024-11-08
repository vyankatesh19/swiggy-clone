import { render, screen, waitFor } from "@testing-library/react";
import { AppContextProvider } from "../../GlobalContext";
import Cards from "./Cards";

describe("renders Cards", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        categories: [
          {
            idCategory: "1",
            strCategory: "Pasta",
            strCategoryThumb:
              "https://www.themealdb.com/images/category/pasta.png",
          },
          {
            idCategory: "2",
            strCategory: "Chicken",
            strCategoryThumb:
              "https://www.themealdb.com/images/category/chicken.png",
          },
          {
            idCategory: "3",
            strCategory: "Dessert",
            strCategoryThumb:
              "https://www.themealdb.com/images/category/dessert.png",
          },
        ],
      }),
    });
  });
  test("renders card details", async () => {
    render(
      <AppContextProvider value={{ state: {} }}>
        <Cards setIsLoading={jest.fn()} />
      </AppContextProvider>
    );
    await waitFor(() => {
      expect(
        screen.getByRole("heading", {
          name: /pasta/i,
        })
      ).toBeVisible();
    });
  });
});
