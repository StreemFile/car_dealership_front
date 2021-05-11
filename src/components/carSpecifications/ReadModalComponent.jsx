import React from 'react';
import {Button, Card, Modal} from "react-bootstrap";
import AutomobileSpecificationInfoCardsComponent from "./AutomobileSpecificationInfoCardsComponent";

const ReadModalComponent = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header>
                <Modal.Title>{props.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AutomobileSpecificationInfoCardsComponent
                    object={props.object}
                    name={props.name}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ReadModalComponent;