import React from 'react';
import {Button, Modal} from "react-bootstrap";
import CustomerInfoCardsComponent from "../customer/CustomerInfoCardsComponent";

const CustomerReadModalComponent = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header>
                <Modal.Title>Customer details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CustomerInfoCardsComponent customer={props.customer}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomerReadModalComponent;