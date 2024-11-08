import React, { useState, useEffect, useContext } from "react";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
import { getDetails } from "../../util/api";
import { appContext } from "../../GlobalContext";
import FilterModal from "../FilterModal/FilterModal";
import "./FilterSortGrid.css";

const FilterSortGrid = () => {
  const [areaList, setAreaList] = useState(null);
  const [rating, setRating] = useState(null);
  const [, setFilter] = useState(null);
  const [show, setShow] = useState(false);
  const { state, setState } = useContext(appContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getDetails("list.php?a=list").then((data) => setAreaList(data.meals));
  }, []);

  let filterButtons = [
    "Fast Delivery",
    "New On Swiggy",
    "Pure Veg",
    "Offers",
    "Rs 300-600",
    "Less than Rs 300",
  ];

  return (
    <div className="container mt-1">
      <h2 key="sort-header">Restaurants with online food delivery</h2>
      <div className="d-flex flex-wrap">
        <div className="m-1">
          <Button variant="light" onClick={handleShow}>
            Filter
          </Button>
          <FilterModal
            areaList={areaList}
            show={show}
            handleClose={handleClose}
          />
        </div>
        <div className="m-1">
          <DropdownButton
            id="sort-alphabet-dropdown"
            title={`Sort by Alphabet`}
            variant="light"
            className="mb-2"
            onSelect={(eventKey) => setState({ ...state, sortBy: eventKey })}
          >
            <Dropdown.Item eventKey="AZ" key="AZ">
              A - Z
            </Dropdown.Item>
            <Dropdown.Item eventKey="ZA" key="ZA">
              Z - A
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="m-1">
          <DropdownButton
            id="rating-dropdown"
            key="rating-dropdown"
            title={`Rating: ${rating || "Select"}`}
            variant="light"
            className="mb-2"
            onSelect={(eventKey) => setRating(eventKey)}
          >
            <Dropdown.Item eventKey="4 & above" key="4-&-above">
              4 & above
            </Dropdown.Item>
            <Dropdown.Item eventKey="3 & above" key="3-&-above">
              3 & above
            </Dropdown.Item>
            <Dropdown.Item eventKey="2 & above" key="2-&-above">
              2 & above
            </Dropdown.Item>
            <Dropdown.Item eventKey="All ratings" key="all-ratings">
              All ratings
            </Dropdown.Item>
          </DropdownButton>
        </div>
        {/* TODO: setFilter  */}
        {filterButtons &&
          filterButtons.map((filterBtn) => {
            return (
              <div className="m-1">
                <Button
                  variant="light"
                  key={filterBtn}
                  onClick={() => setFilter(filterBtn)}
                >
                  {filterBtn}
                </Button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FilterSortGrid;
