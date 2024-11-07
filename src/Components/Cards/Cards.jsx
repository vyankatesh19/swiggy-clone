import React, { useEffect, useState } from 'react';

const Cards = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
                const data = await response.json();
                setCategories(data.categories || []);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="container py-4">
            <h2 className="mb-4">
                <span className="bold-underline">Food Categories</span>
            </h2>
            {/* Display Food Category Cards */}
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {categories.map(category => (
                    <div className="col" key={category.idCategory}>
                        <div className="card h-100">
                            <img src={category.strCategoryThumb} className="card-img-top" alt={category.strCategory} />
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
