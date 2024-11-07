import React, { useEffect, useState, useContext } from "react";
import { getDetails } from "../../util/api";
import { appContext } from "../../GlobalContext";

const Cards = () => {
    const [categories, setCategories] = useState([]);
    const { state } = useContext(appContext);

    useEffect(() => {
        getDetails("categories.php").then((data) => setCategories(data.categories));
    }, []);

    return (
        <div className="container py-4">
            <h2 className="mb-4">
                <span className="bold-underline">Food Categories</span>
            </h2>

            {/* Display Food Category Cards and meal cards for selected area*/}
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {state.displayMeals
                    ? state?.foodByArea?.map((category) => ( // filter by area api call returns meals
                        <div className="col" key={category?.idCategory}>
                            <div className="card h-100">
                                <img
                                    src={category?.strMealThumb}
                                    className="card-img-top"
                                    alt={category?.strMeal}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{category?.strMeal}</h5>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Rating: {category?.rating}</h5>
                                </div>
                            </div>
                        </div>
                    ))
                    : categories?.map((category) => (  //default api response returns  category
                        <div className="col" key={category.idCategory}>
                            <div className="card h-100">
                                <img
                                    src={category.strCategoryThumb}
                                    className="card-img-top"
                                    alt={category.strCategory}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{category.strCategory}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Cards;