import React, {useEffect, useState} from 'react';
import {Button, Modal} from "react-bootstrap";

import DealershipInfoCardsComponent from "./DealershipInfoCardsComponent";

const DealershipReadModalComponent = (props) => {

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header>
                <Modal.Title>{props.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DealershipInfoCardsComponent
                    dealership={props.dealership}
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

export default DealershipReadModalComponent;