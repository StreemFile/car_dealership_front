import React from 'react';
import {Button, Modal} from "react-bootstrap";
import ModelAndPackageInfoCardsComponent from "./ModelAndPackageInfoCardsComponent";

const ModelAndPackageReadModalComponent = (props) => {

        return (
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header>
                    <Modal.Title>Model details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ModelAndPackageInfoCardsComponent object={props.object}/>
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