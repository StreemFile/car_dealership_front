import React, {useState} from 'react';
import {Button, Card, Modal} from "react-bootstrap";

const AddModalComponent = (props) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const add = (event) => {
        event.preventDefault();
        const newObject = {
            id: null,
            name: name,
            description: description,
            created_at: null,
            modified_at: null
        }
        props.service.create(newObject);
        setName("");
        setDescription("");
        props.handleClose();
    }

    return (
        <Modal show={props.show} onHide={props.handleClose} animation={true}>
            <Modal.Header>
                <Modal.Title>{props.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form autoComplete="off">
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>{props.cardTitle}</Card.Title>
                        <Card.Text>
                            <input
                                type="text" value={name}
                                onChange={(event) =>
                                    setName(event.target.value)}
                                className="form-control m-3"
                                style={{width: "93%"}}/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 p-3 text-center"
                    >
                        <Card.Title>Опис</Card.Title>
                        <Card.Text>
                            <textarea
                                value={description}
                                onChange={(event) =>
                                    setDescription(event.target.value)}
                                className="form-control m-3"
                                style={{height: "300px", width: "93%"}}/>

                        </Card.Text>
                    </Card>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={add}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddModalComponent;