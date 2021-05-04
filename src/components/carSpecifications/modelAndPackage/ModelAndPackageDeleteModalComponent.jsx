import React, {useState} from 'react';
import {Alert, Button, Modal} from "react-bootstrap";

const ModelAndPackageDeleteModalComponent = (props) => {
    const [name, setName] = useState("");

    const [isNameWrittenRight, setIsNameWrittenRight] = useState(true);

    const deleteObject = () => {
        if (props.object.model === name) {
            props.service.delete(props.object.id);
            setIsNameWrittenRight(true);
            setName("");
            props.handleClose();
        } else {
            setIsNameWrittenRight(false);
        }
    }

    return (
        <Modal show={props.show} onHide={props.handleClose} animation={true}>
            <Modal.Header>
                <Modal.Title>Delete model</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    !isNameWrittenRight
                    && <Alert variant="danger">
                        Невірно введені дані!
                    </Alert>}
                Щоб видалити об'єкт введіть <strong>{props.object.model}</strong>
                <br/>
                <form autoComplete="off">
                    <input
                        type="text" value={name}
                        onChange={(event) =>
                            setName(event.target.value)}
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

export default ModelAndPackageDeleteModalComponent;