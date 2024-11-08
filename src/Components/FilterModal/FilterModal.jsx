import React, { useContext, useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { appContext } from "../../GlobalContext";
import { getDetails } from "../../util/api";

const FilterModal = (props) => {
  const [areaString, setAreaString] = useState(null);
  const { state, setState } = useContext(appContext);
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      scrollable={true}
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Filter By Area</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.areaList?.map((element) => (
          <Form.Check
            type="radio"
            id={element.strArea}
            label={element.strArea}
            name="area-list"
            className="mb-2"
            checked={element.strArea === areaString}
            onChange={() => setAreaString(element.strArea)}
            key={element.strArea}
          />
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          disabled={areaString === null}
          onClick={() => {
            setAreaString(null);
          }}
        >
          Clear Filter
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            areaString
              ? getDetails(`filter.php?a=${areaString}`).then((data) => {
                  setState({
                    ...state,
                    area: areaString,
                    foodByArea: data.meals.map((item) => {
                      return {
                        ...item,
                        rating: (
                          Math.random() * (4.0 - 1.0 + 1.0) +
                          1.0
                        ).toFixed(2),
                      };
                    }),
                    displayMeals: true,
                  });
                })
              : setState({
                  ...state,
                  foodByArea: [],
                  displayMeals: false,
                  area: null,
                });
            props.handleClose();
          }}
        >
          Apply
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterModal;
