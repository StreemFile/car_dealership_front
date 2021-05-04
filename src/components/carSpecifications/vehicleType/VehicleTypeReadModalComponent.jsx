import React from 'react';
import {Button, Card, Modal} from "react-bootstrap";

const VehicleTypeReadModalComponent = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header>
                <Modal.Title>Vehicle type details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card
                    className="mb-2 text-center"
                >
                    <Card.Title>ID</Card.Title>
                    <Card.Text>{props.vehicleType.id}</Card.Text>
                </Card>
                <Card
                    className="mb-2 text-center"
                >
                    <Card.Title>Тип кузова</Card.Title>
                    <Card.Text>{props.vehicleType.vehicleType}</Card.Text>
                </Card>
                <Card
                    className="mb-2 text-center"
                >
                    <Card.Title>Опис</Card.Title>
                    <Card.Text>{props.vehicleType.description}</Card.Text>
                </Card>
                <Card
                    className="mb-2 text-center"
                >
                    <Card.Title>Дата створення</Card.Title>
                    <Card.Text>{props.vehicleType.created_at}</Card.Text>
                </Card>
                <Card
                    className="mb-2 text-center"
                >
                    <Card.Title>Дата останньої модифікації</Card.Title>
                    <Card.Text>{props.vehicleType.modified_at}</Card.Text>
                </Card>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default VehicleTypeReadModalComponent;