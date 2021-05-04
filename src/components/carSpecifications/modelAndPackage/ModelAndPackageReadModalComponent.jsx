import React from 'react';
import {Button, Card, Modal} from "react-bootstrap";

const ModelAndPackageReadModalComponent = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header>
                <Modal.Title>Model details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card
                    className="mb-2 text-center"
                >
                    <Card.Title>ID</Card.Title>
                    <Card.Text>{props.object.id}</Card.Text>
                </Card>
                <Card
                    className="mb-2 text-center"
                >
                    <Card.Title>Модель</Card.Title>
                    <Card.Text>{props.object.model}</Card.Text>
                </Card>
                <Card
                    className="mb-2 text-center"
                >
                    <Card.Title>Комплектація</Card.Title>
                    <Card.Text>{props.object.pack}</Card.Text>
                </Card>
                <Card
                    className="mb-2 text-center"
                >
                    <Card.Title>Опис</Card.Title>
                    <Card.Text>{props.object.description}</Card.Text>
                </Card>
                <Card
                    className="mb-2 text-center"
                >
                    <Card.Title>Дата створення</Card.Title>
                    <Card.Text>{props.object.created_at}</Card.Text>
                </Card>
                <Card
                    className="mb-2 text-center"
                >
                    <Card.Title>Дата останньої модифікації</Card.Title>
                    <Card.Text>{props.object.modified_at}</Card.Text>
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

export default ModelAndPackageReadModalComponent;