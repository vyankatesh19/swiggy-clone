
import React, { useState, useEffect, useContext } from "react";
import { Dropdown, DropdownButton, Form, Button } from "react-bootstrap";
import { getDetails } from "../../util/api";
import FilterModal from "../FilterModal/FilterModal";
import "./FilterSortGrid.css";

const FilterSortGrid = () => {
  const [areaList, setAreaList] = useState(null);
  const [sortByAlphabets, setSortByAlphabets] = useState(null);
  const [rating, setRating] = useState(null);
  const [fastDelivery, setFastDelivery] = useState(false);
  const [newOnSwiggy, setNewOnSwiggy] = useState(false);
  const [pureVeg, setPureVeg] = useState(false);
  const [offers, setOffers] = useState(false);
  const [priceRange, setPriceRange] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getDetails("list.php?a=list").then((data) => setAreaList(data.meals));
  }, []);
  return (
    <div className="d-flex justify-content-around p-3">
      <div className="p-1">
        <Button variant="secondary" onClick={handleShow}>
          Filter
        </Button>
        <FilterModal
          areaList={areaList}
          show={show}
          handleClose={handleClose}
        />
      </div>
      <div className="p-1">
        <DropdownButton
          id="sort-alphabet-dropdown"
          title={`Sort by Alphabet`}
          className="mb-2"
          onSelect={(eventKey) => setSortByAlphabets(eventKey)}
        >
          <Dropdown.Item eventKey="A - Z">A - Z</Dropdown.Item>
          <Dropdown.Item eventKey="Z - A">Z - A</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="p-1">
        <Form.Check
          type="checkbox"
          id="fast-delivery"
          label="Fast Delivery"
          className="mb-2"
          checked={fastDelivery}
          onChange={(e) => setFastDelivery(e.target.checked)}
        />
      </div>
      <div className="p-1">
        <Form.Check
          type="checkbox"
          id="new-on-swiggy"
          label="New on Swiggy"
          className="mb-2"
          checked={newOnSwiggy}
          onChange={(e) => setNewOnSwiggy(e.target.checked)}
        />
      </div>
      <div className="p-1">
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
      <div className="p-1">
        <Form.Check
          type="checkbox"
          id="pure-veg"
          label="Pure Veg"
          className="mb-2"
          checked={pureVeg}
          onChange={(e) => setPureVeg(e.target.checked)}
        />
      </div>
      <div className="p-1">
        <Form.Check
          type="checkbox"
          id="offers"
          label="Offers"
          className="mb-2"
          checked={offers}
          onChange={(e) => setOffers(e.target.checked)}
        />
      </div>
      <div className="p-1">
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
      <div className="p-1">
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
  );
};

export default FilterSortGrid;
