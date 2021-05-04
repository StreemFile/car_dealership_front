import React, {useEffect, useState} from 'react';
import VehicleTypeService from "../../../service/VehicleTypeService";
import {Button, Card, Modal} from "react-bootstrap";

const VehicleTypeEditModalComponent = (props) => {

    const [name, setName] = useState(props.vehicleType.vehicleType);
    const [description, setDescription] = useState(props.vehicleType.description);

    useEffect(() => {
        setName(props.vehicleType.vehicleType);
        setDescription(props.vehicleType.description);
    }, [props.vehicleType.vehicleType, props.vehicleType.description])

    const editVehicleType = (event) => {
        event.preventDefault();
        const newVehicleType = {
            id: props.vehicleType.id,
            vehicleType: name,
            description: description,
            created_at: props.vehicleType.created_at,
            modified_at: props.vehicleType.modified_at
        }
        VehicleTypeService.update(newVehicleType, newVehicleType.id);
        props.handleClose();
    }


    return (
        <Modal show={props.show} onHide={props.handleClose} animation={true}>
            <Modal.Header>
                <Modal.Title>Edit vehicle type</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form autoComplete="off">
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>ID</Card.Title>
                        <Card.Text>
                            <input type="text"
                                   value={props.vehicleType.id}
                                   className="form-control m-3"
                                   style={{width: "93%"}}
                                   disabled/>
                        </Card.Text>
                    </Card>
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
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Дата створення</Card.Title>
                        <Card.Text>
                            <input type="text"
                                   value={props.vehicleType.created_at}
                                   className="form-control m-3"
                                   style={{width: "93%"}}
                                   disabled/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Дата останньої модифікації</Card.Title>
                        <Card.Text>
                            <input type="text"
                                   value={props.vehicleType.modified_at}
                                   className="form-control m-3"
                                   style={{width: "93%"}}
                                   disabled/>
                        </Card.Text>
                    </Card>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={editVehicleType}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default VehicleTypeEditModalComponent;