import React, {useState} from 'react';
import {Button, Card, Modal} from "react-bootstrap";
import VehicleTypeService from "../../../service/VehicleTypeService";

const VehicleTypeAddModalComponent = (props) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const addVehicleType = (event) => {
        event.preventDefault();
        const newVehicleType = {
            id: null,
            vehicleType: name,
            description: description,
            created_at: null,
            modified_at: null
        }
        VehicleTypeService.create(newVehicleType);
        setName("");
        setDescription("");
        props.handleClose();
    }

    return (
        <Modal show={props.show} onHide={props.handleClose} animation={true}>
            <Modal.Header>
                <Modal.Title>Add vehicle type</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form autoComplete="off">
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Тип кузова</Card.Title>
                        <Card.Text>
                            <input
                                type="text" value={name}
                                onChange={(event) =>
                                    setName(event.target.value)}
                                className="form-control m-3"
                                style={{width: "93%"}}/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 p-3 text-center"
                    >
                        <Card.Title>Опис</Card.Title>
                        <Card.Text>
                            <textarea
                                value={description}
                                onChange={(event) =>
                                    setDescription(event.target.value)}
                                className="form-control m-3"
                                style={{height: "300px", width: "93%"}}/>

                        </Card.Text>
                    </Card>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={addVehicleType}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default VehicleTypeAddModalComponent;