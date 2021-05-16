import React, {useEffect, useState} from 'react';
import {Button, Card, Modal} from "react-bootstrap";

const CustomerEditModalComponent = (props) => {
    const [name, setName] = useState("");
    const [passport, setPassport] = useState("");
    const [telephone, setTelephone] = useState("");
    const [placeOfResidence, setPlaceOfResidence] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");


    const update = () => {
        let newCustomer = {
            id: props.customer.id,
            name: name,
            passport: passport,
            telephone: telephone,
            placeOfResidence: placeOfResidence,
            address: address,
            description: description,
            created_at: props.customer.created_at,
            modified_at: props.customer.modified_at
        }
        props.service.update(newCustomer, newCustomer.id);
        props.setIsEdited(true);
        handleClear();
        props.handleClose();
    }

    useEffect(() => {
        setName(props.customer.name);
        setPassport(props.customer.passport);
        setTelephone(props.customer.telephone);
        setPlaceOfResidence(props.customer.placeOfResidence);
        setAddress(props.customer.address);
        setDescription(props.customer.description);
    }, [props.customer])

    const handleClear = () => {
        setName("");
        setPassport("");
        setTelephone("");
        setPlaceOfResidence("");
        setAddress("");
        setDescription("");
    }

    return (
        <Modal show={props.show} onHide={props.handleClose} animation={true}>
            <Modal.Header>
                <Modal.Title>Add model</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form autoComplete="off">
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>ID</Card.Title>
                        <Card.Text>
                            <input type="text"
                                   value={props.customer.id}
                                   className="form-control m-3"
                                   style={{width: "93%"}}
                                   disabled/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>ПІП</Card.Title>
                        <Card.Text>
                            <input
                                type="text" value={name}
                                onChange={(event) =>
                                    setName(event.target.value)}
                                className="form-control m-3"
                                placeholder="Введіть ПІП"
                                style={{width: "93%"}}/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Номер паспорта</Card.Title>
                        <Card.Text>
                            <input
                                type="text" value={passport}
                                onChange={(event) =>
                                    setPassport(event.target.value)}
                                className="form-control m-3"
                                placeholder="Введіть номер паспорта"
                                style={{width: "93%"}}/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Номер телефона</Card.Title>
                        <Card.Text>
                            <input
                                type="text" value={telephone}
                                onChange={(event) =>
                                    setTelephone(event.target.value)}
                                className="form-control m-3"
                                placeholder="Введіть номер телефона"
                                style={{width: "93%"}}/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Місто проживання</Card.Title>
                        <Card.Text>
                            <input
                                type="text" value={placeOfResidence}
                                onChange={(event) =>
                                    setPlaceOfResidence(event.target.value)}
                                className="form-control m-3"
                                placeholder="Введіть комплектацію"
                                style={{width: "93%"}}/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Адрес</Card.Title>
                        <Card.Text>
                            <input
                                type="text" value={address}
                                onChange={(event) =>
                                    setAddress(event.target.value)}
                                className="form-control m-3"
                                placeholder="Введіть комплектацію"
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
                                placeholder="Введіть опис"
                                style={{height: "300px", width: "93%"}}/>

                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Дата створення</Card.Title>
                        <Card.Text>
                            <input type="text"
                                   value={props.customer.created_at}
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
                                   value={props.customer.modified_at}
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
                <Button variant="info" onClick={handleClear}>
                    Clear
                </Button>
                <Button
                    type="submit"
                    variant="primary"
                    onClick={() => {
                        update()
                    }}
                >
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomerEditModalComponent;