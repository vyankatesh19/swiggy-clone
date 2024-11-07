import React, { useState, useContext } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { appContext } from "../../GlobalContext";
import { getDetails } from "../../util/api";

const FilterModal = (props) => {
    const [area, setArea] = useState(null);
    const { state, setState } = useContext(appContext);
    console.log("rea ", area);
    return (
        <Modal show={props.show} onHide={props.handleClose} scrollable={true}>
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
                        checked={element.strArea === area}
                        onChange={() => setArea(element.strArea)}
                        key={element.strArea}
                    />
                ))}
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="primary"
                    disabled={area === null}
                    onClick={() => {
                        setArea(null);
                    }}
                >
                    Clear Filter
                </Button>
                <Button
                    variant="primary"
                    onClick={() => {
                        area
                            ? getDetails(`filter.php?a=${area}`).then((data) => {
                                setState({
                                    ...state,
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