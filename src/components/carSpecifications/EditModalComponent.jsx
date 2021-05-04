import React, {useEffect, useState} from 'react';
import {Button, Card, Modal} from "react-bootstrap";

const EditModalComponent = (props) => {

    const [name, setName] = useState(props.object.name);
    const [description, setDescription] = useState(props.object.description);

    useEffect(() => {
        setName(props.object.name);
        setDescription(props.object.description);
    }, [props.object.name, props.object.description])

    const edit = (event) => {
        event.preventDefault();
        const newObject = {
            id: props.object.id,
            name: name,
            description: description,
            created_at: props.object.created_at,
            modified_at: props.object.modified_at
        }
        props.service.update(newObject, newObject.id);
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
                        <Card.Title>ID</Card.Title>
                        <Card.Text>
                            <input type="text"
                                   value={props.object.id}
                                   className="form-control m-3"
                                   style={{width: "93%"}}
                                   disabled/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>{props.name}</Card.Title>
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
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Дата створення</Card.Title>
                        <Card.Text>
                            <input type="text"
                                   value={props.object.created_at}
                                   className="form-control m-3"
                                   style={{width: "93%"}}
                                   disabled/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Дата останньої модифікації</Card.Title>
                        <Card.Text>
                            <input type="text"
                                   value={props.object.modified_at}
                                   className="form-control m-3"
                                   style={{width: "93%"}}
                                   disabled/>
                        </Card.Text>
                    </Card>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={edit}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditModalComponent;