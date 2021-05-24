import React from 'react';
import {Button, Modal} from "react-bootstrap";
import EmployeeInfoCardsComponent from "./EmployeeInfoCardsComponent";

const EmployeeReadModalComponent = (props) => {

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header>
                <Modal.Title>Employee details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EmployeeInfoCardsComponent employee={props.employee}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EmployeeReadModalComponent;