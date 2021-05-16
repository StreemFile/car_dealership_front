import React, {useState} from 'react';
import {Alert, Button, Modal} from "react-bootstrap";

const CustomerDeleteModalComponent = (props) => {
    const [passport, setPassport] = useState("");

    const [isPassportWrittenRight, setIsPassportWrittenRight] = useState(true);

    const deleteObject = () => {
        if (props.customer.passport === passport) {
            props.service.delete(props.customer.id);
            setIsPassportWrittenRight(true);
            setPassport("");
            props.setIsDeleted(true);
            props.handleClose();
        } else {
            setIsPassportWrittenRight(false);
        }
    }

    return (
        <Modal show={props.show} onHide={props.handleClose} animation={true}>
            <Modal.Header>
                <Modal.Title>Delete customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    !isPassportWrittenRight
                    && <Alert variant="danger">
                        Невірно введені дані!
                    </Alert>}
                Щоб видалити об'єкт введіть <strong>{props.customer.passport}</strong>
                <br/>
                <form autoComplete="off">
                    <input
                        type="text" value={passport}
                        onChange={(event) =>
                            setPassport(event.target.value)}
                        className="form-control m-3"
                        style={{width: "93%"}}/>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={deleteObject}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomerDeleteModalComponent;