import React, {useEffect, useState} from 'react';
import {Button, Card, Modal} from "react-bootstrap";

const CustomerAddModalComponent = (props) => {

    const [name, setName] = useState("");
    const [passport, setPassport] = useState("");
    const [telephone, setTelephone] = useState("");
    const [placeOfResidence, setPlaceOfResidence] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");

    const [doesPassportAlreadyExist, setDoesPassportAlreadyExist] = useState(false);
    const [doesTelephoneAlreadyExist, setDoesTelephoneAlreadyExist] = useState(false);

    const [isAdded, setIsAdded] = useState(false);

    const checkIfPassportAlreadyExists = () => {
        return props.customers.filter(item =>
            item.passport === passport).length
    }

    const checkIfTelephoneAlreadyExists = () => {
        return props.customers.filter(item =>
            item.telephone === telephone).length
    }


    const add = () => {
        if (checkIfTelephoneAlreadyExists() === 0
            && checkIfPassportAlreadyExists() === 0) {
            let newCustomer = {
                id: null,
                name: name,
                passport: passport,
                telephone: telephone,
                placeOfResidence: placeOfResidence,
                address: address,
                description: description,
                created_at: null,
                modified_at: null
            }
            props.service.create(newCustomer);
            props.setIsAdded(true);
            handleClear();
            props.handleClose();
        } else {
            if (checkIfTelephoneAlreadyExists() !== 0
                && checkIfPassportAlreadyExists() !== 0) {
                setDoesPassportAlreadyExist(true);
                setDoesTelephoneAlreadyExist(true);
            } else if (checkIfTelephoneAlreadyExists() !== 0
                && checkIfPassportAlreadyExists() === 0) {
                setDoesTelephoneAlreadyExist(true);
            } else {
                setDoesPassportAlreadyExist(true);
            }
        }
    }

    const addNewCustomer = () => {
        if (isAdded) {
            setIsAdded(false);
            add();
        }
    }

    useEffect(() => {
        addNewCustomer()
    }, [add, isAdded])

    const handleClear = () => {
        setName("");
        setPassport("");
        setTelephone("");
        setPlaceOfResidence("");
        setAddress("");
        setDescription("");
        setDoesPassportAlreadyExist(false);
        setDoesTelephoneAlreadyExist(false);
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
                            {
                                doesPassportAlreadyExist &&
                                <div className="alert alert-danger m-3" role="alert">
                                    Об'єкт з таким номером паспорта вже існує!
                                </div>
                            }
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
                            {
                                doesTelephoneAlreadyExist &&
                                <div className="alert alert-danger m-3" role="alert">
                                    Об'єкт з таким номером телефона вже існує!
                                </div>
                            }
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
                        setIsAdded(true);
                    }}
                >
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomerAddModalComponent;