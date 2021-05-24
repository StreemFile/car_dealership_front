import React from 'react';
import {Button, Modal} from "react-bootstrap";
import CompanyInfoCardsComponent from "./CompanyInfoCardsComponent";

const CompanyDetailsModalComponent = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleCloseModal} animation={true}>
            <Modal.Header>
                <Modal.Title>Company details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CompanyInfoCardsComponent
                    company={props.company}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleCloseModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CompanyDetailsModalComponent;