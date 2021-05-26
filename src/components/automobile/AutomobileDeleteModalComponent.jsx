import React, {useState} from 'react';
import {Alert, Button, Modal} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const AutomobileDeleteModalComponent = (props) => {
    const history = useHistory();
    const [vin, setVin] = useState("");

    const [isVinWrittenRight, setIsVinWrittenRight] = useState(true);

    const deleteObject = () => {
        if (props.object.vin === vin) {
            props.service.delete(props.object.id);
            setIsVinWrittenRight(true);
            setVin("");
            props.handleClose();
            history.push("/automobiles")
        } else {
            setIsVinWrittenRight(false);
        }
    }

    return (
        <Modal show={props.show} onHide={props.handleClose} animation={true}>
            <Modal.Header>
                <Modal.Title>Delete automobile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    !isVinWrittenRight
                    && <Alert variant="danger">
                        Невірно введені дані!
                    </Alert>}
                Щоб видалити об'єкт введіть <strong>{props.object.vin}</strong>
                <br/>
                <form autoComplete="off">
                    <input
                        type="text" value={vin}
                        onChange={(event) =>
                            setVin(event.target.value)}
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

export default AutomobileDeleteModalComponent;