import React, { useState } from "react";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";
import "./FilterSortGrid.css";

const FilterSortGrid = () => {
  const [filterByArea, setFilterByArea] = useState(null);
  const [sortByAlphabets, setSortByAlphabets] = useState(null);
  const [rating, setRating] = useState(null);
  const [fastDelivery, setFastDelivery] = useState(false);
  const [newOnSwiggy, setNewOnSwiggy] = useState(false);
  const [pureVeg, setPureVeg] = useState(false);
  const [offers, setOffers] = useState(false);
  const [priceRange, setPriceRange] = useState(null);

  return (
    <div className="container p-3">
      <div className="row">
        <div className="col">
          <DropdownButton
            id="area-dropdown"
            // title={`Sort by Area: ${filterByArea || "Select"}`}
            title={`Filter`}
            onSelect={(eventKey) => setFilterByArea(eventKey)}
          >
            {/* Iterarte area api resposnse using .map*/}
            <Dropdown.Item eventKey="A - Z">A - Z</Dropdown.Item>
            <Dropdown.Item eventKey="Z - A">Z - A</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="col">
          {/* Sort By Alphabet */}
          <DropdownButton
            id="sort-alphabet-dropdown"
            // title={`Sort by Alphabet: ${sortByAlphabets || "Select"}`}
            title={`Sort by Alphabet`}
            className="mb-2"
            onSelect={(eventKey) => setSortByAlphabets(eventKey)}
          >
            <Dropdown.Item eventKey="A - Z">A - Z</Dropdown.Item>
            <Dropdown.Item eventKey="Z - A">Z - A</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="col">
          {/* Fast Delivery */}
          <Form.Check
            type="checkbox"
            id="fast-delivery"
            label="Fast Delivery"
            className="mb-2"
            checked={fastDelivery}
            onChange={(e) => setFastDelivery(e.target.checked)}
          />
        </div>
        <div className="col">
          {/* New on Swiggy */}
          <Form.Check
            type="checkbox"
            id="new-on-swiggy"
            label="New on Swiggy"
            className="mb-2"
            checked={newOnSwiggy}
            onChange={(e) => setNewOnSwiggy(e.target.checked)}
          />
        </div>
        <div className="col">
          {/* Rating */}
          <DropdownButton
            id="rating-dropdown"
            title={`Rating: ${rating || "Select"}`}
            className="mb-2"
            onSelect={(eventKey) => setRating(eventKey)}
          >
            <Dropdown.Item eventKey="4 & above">4 & above</Dropdown.Item>
            <Dropdown.Item eventKey="3 & above">3 & above</Dropdown.Item>
            <Dropdown.Item eventKey="2 & above">2 & above</Dropdown.Item>
            <Dropdown.Item eventKey="All ratings">All ratings</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="col">
          {/* Pure Veg */}
          <Form.Check
            type="checkbox"
            id="pure-veg"
            label="Pure Veg"
            className="mb-2"
            checked={pureVeg}
            onChange={(e) => setPureVeg(e.target.checked)}
          />
        </div>
        <div className="col">
          {/* Offers */}
          <Form.Check
            type="checkbox"
            id="offers"
            label="Offers"
            className="mb-2"
            checked={offers}
            onChange={(e) => setOffers(e.target.checked)}
          />
        </div>
        <div className="col">
          {/* Price Range */}
          <Form.Check
            type="radio"
            id="price-300-600"
            label="Rs 300-600"
            name="price-range"
            className="mb-2"
            checked={priceRange === "Rs 300-600"}
            onChange={() => setPriceRange("Rs 300-600")}
          />
        </div>
        <div className="col">
          <Form.Check
            type="radio"
            id="price-less-300"
            label="Less than Rs 300"
            name="price-range"
            className="mb-2"
            checked={priceRange === "Less than Rs 300"}
            onChange={() => setPriceRange("Less than Rs 300")}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSortGrid;
