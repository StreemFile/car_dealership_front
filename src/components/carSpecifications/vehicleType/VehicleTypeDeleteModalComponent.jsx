import React, {useState} from 'react';
import {Alert, Button, Modal} from "react-bootstrap";
import VehicleTypeService from "../../../service/VehicleTypeService";

const VehicleTypeDeleteModalComponent = (props) => {
    const [name, setName] = useState("");

    const [isNameWrittenRight, setIsNameWrittenRight] = useState(true);

    const deleteVehicleType = () => {
        if (props.vehicleType.vehicleType === name) {
            VehicleTypeService.delete(props.vehicleType.id);
            setIsNameWrittenRight(true);
            setName("");
            props.handleClose();
        } else {
            setIsNameWrittenRight(false);
        }
    }

    return (
        <Modal show={props.show} onHide={props.handleClose} animation={true}>
            <Modal.Header>
                <Modal.Title>Delete vehicle type</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    !isNameWrittenRight
                    && <Alert variant="danger">
                        Невірно введений тип кузову!
                    </Alert>}
                Щоб видалити тип кузова введіть <strong>{props.vehicleType.vehicleType}</strong>.
                <br/>
                <form autoComplete="off">
                    <input
                        type="text" value={name}
                        onChange={(event) =>
                            setName(event.target.value)}
                        className="form-control m-3"
                        style={{width: "93%"}}/>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={deleteVehicleType}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default VehicleTypeDeleteModalComponent;