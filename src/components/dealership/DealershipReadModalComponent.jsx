import React from 'react';
import {Button, Card, Modal} from "react-bootstrap";

const DealershipReadModalComponent = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header>
                <Modal.Title>{props.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card
                    className="mb-2 text-center"
                >
                    <Card.Title>ID</Card.Title>
                    <Card.Text>{props.dealership.id}</Card.Text>
                </Card>
                <Card
                    className="mb-2 text-center"
                >
                    <Card.Title>Місто</Card.Title>
                    <Card.Text>{props.dealership.city}</Card.Text>
                </Card>
                <Card
                    className="mb-2 text-center"
                >
                    <Card.Title>Місто англійською</Card.Title>
                    <Card.Text>{props.dealership.cityEnglish}</Card.Text>
                </Card>
                <Card
                    className="mb-2 text-center"
                >
                    <Card.Title>Адрес</Card.Title>
                    <Card.Text>{props.dealership.address}</Card.Text>
                </Card>
                <Card
                    className="mb-2 text-center"
                >
                    <Card.Title>Телефон</Card.Title>
                    <Card.Text>{props.dealership.telephone}</Card.Text>
                </Card>
                <Card
                    className="mb-2 text-center"
                >
                    <Card.Title>Опис</Card.Title>
                    <Card.Text>{props.dealership.description}</Card.Text>
                </Card>
                <Card
                    className="mb-2 text-center"
                >
                    <Card.Title>Компанія</Card.Title>
                    <Card.Text>{props.dealership.company.name}</Card.Text>
                </Card>
                <Card
                    className="mb-2 text-center"
                >
                    <Card.Title>Дата створення</Card.Title>
                    <Card.Text>{props.dealership.created_at}</Card.Text>
                </Card>
                <Card
                    className="mb-2 text-center"
                >
                    <Card.Title>Дата останньої модифікації</Card.Title>
                    <Card.Text>{props.dealership.modified_at}</Card.Text>
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

export default DealershipReadModalComponent;