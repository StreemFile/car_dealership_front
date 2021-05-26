import React, {useState} from 'react';
import {Alert, Button, Modal} from "react-bootstrap";
import { useHistory } from 'react-router-dom'

const PurchaseDeleteModalComponent = (props) => {
    const history = useHistory();
    const [soldPrice, setPrice] = useState("");

    const [isPurchaseWrittenRight, setIsPurchaseWrittenRight] = useState(true);

    const deleteObject = () => {
        if (props.purchase.soldPrice.toString() === soldPrice) {
            props.service.delete(props.purchase.id);
            setIsPurchaseWrittenRight(true);
            setPrice("");
            props.handleClose();
            history.push("/purchases")
        } else {
            setIsPurchaseWrittenRight(false);
        }
    }

    return (
        <Modal show={props.show} onHide={props.handleClose} animation={true}>
            <Modal.Header>
                <Modal.Title>Delete purchase</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    !isPurchaseWrittenRight
                    && <Alert variant="danger">
                        Невірно введені дані!
                    </Alert>}
                Щоб видалити об'єкт введіть <strong>{props.purchase.soldPrice}</strong>
                <br/>
                <form autoComplete="off">
                    <input
                        type="text" value={soldPrice}
                        onChange={(event) =>
                            setPrice(event.target.value)}
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

export default PurchaseDeleteModalComponent;