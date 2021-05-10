import React, {useState} from 'react';
import {Alert, Button, Modal} from "react-bootstrap";
import {NavLink} from "react-router-relative-link";

const DealershipDeleteModalComponent = (props) => {
    const [city, setCity] = useState("");

    const [isCityWrittenRight, setIsCityWrittenRight] = useState(true);

    const deleteObject = () => {
        if (props.object.city === city) {
            props.service.delete(props.object.id);
            props.rerenderNavbar(true);
            setIsCityWrittenRight(true);
            setCity("");
            props.handleClose();
        } else {
            setIsCityWrittenRight(false);
        }
    }

    return (
        <Modal show={props.show} onHide={props.handleClose} animation={true}>
            <Modal.Header>
                <Modal.Title>Delete dealership</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    !isCityWrittenRight
                    && <Alert variant="danger">
                        Невірно введені дані!
                    </Alert>}
                Щоб видалити об'єкт введіть <strong>{props.object.city}</strong>
                <br/>
                <form autoComplete="off">
                    <input
                        type="text" value={city}
                        onChange={(event) =>
                            setCity(event.target.value)}
                        className="form-control m-3"
                        style={{width: "93%"}}/>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <NavLink to="/dealerships">
                    <Button variant="primary" onClick={deleteObject}>
                        Delete
                    </Button>
                </NavLink>
            </Modal.Footer>
        </Modal>
    );
}

export default DealershipDeleteModalComponent;