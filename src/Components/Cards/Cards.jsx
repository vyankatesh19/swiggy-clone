import React, { useEffect, useState, useContext } from "react";
import { getDetails } from "../../util/api";
import { appContext } from "../../GlobalContext";
import PaginationGrid from "../Pagination/Pagination";
import { ITEMS_PER_PAGE } from "../../util/constant";
import { sortArray } from "../../util/util";

const Cards = () => {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { state } = useContext(appContext);

  // Calculate the current cards to display based on the page

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = state.displayMeals
    ? sortArray(state?.foodByArea, state.sortBy, "strMeal").slice(
      indexOfFirstItem,
      indexOfLastItem
    )
    : sortArray(categories, state.sortBy, "strCategory").slice(
      indexOfFirstItem,
      indexOfLastItem
    );

  const totalCards = state.displayMeals
    ? state?.foodByArea?.length
    : categories?.length;

  useEffect(() => {
    getDetails("categories.php").then((data) => setCategories(data.categories));
  }, []);

  useEffect(() => {
    state?.area && setCurrentPage(1);
  }, [state?.area]);

  return (
    <div className="container py-4">
      <h2 className="mb-4">
        <span className="bold-underline">
          {state?.area ? `${state.area} Food` : "Food Categories"}
        </span>
      </h2>
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {currentItems?.map((item) => (
          <div className="col" key={item?.idCategory || item.idMeal}>
            <div className="card h-100">
              <img
                src={item?.strMealThumb || item.strCategoryThumb}
                className="card-img-top"
                alt={item?.strMeal || item.strCategory}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {item?.strMeal || item.strCategory}
                </h5>
                {state.displayMeals && <h6>Rating: {item?.rating}</h6>}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <PaginationGrid
          totalCards={totalCards}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Cards;
