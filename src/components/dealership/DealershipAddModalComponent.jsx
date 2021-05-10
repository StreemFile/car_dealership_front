import React, {useEffect, useState} from 'react';
import {Button, Card, Modal} from "react-bootstrap";

const DealershipAddModalComponent = (props) => {

    const [doesAlreadyExist, setDoesAlreadyExist] = useState(false);
    const [existingObjects, setExistingObjects] = useState([]);

    const [city, setCity] = useState("");
    const [cityEnglish, setCityEnglish] = useState("");
    const [address, setAddress] = useState("");
    const [telephone, setTelephone] = useState("");
    const [description, setDescription] = useState("");

    const checkIfAlreadyExists = (objectToCheck, existingObjects) => {
        return existingObjects.filter(item =>
            item.city === objectToCheck.city
            && item.address === objectToCheck.address
        ).length
    }

    const add = (event) => {
        event.preventDefault();
        const newObject = {
            id: null,
            city: city,
            cityEnglish: cityEnglish,
            address: address,
            telephone: telephone,
            company: props.company,
            description: description,
            created_at: null,
            modified_at: null
        }
        if (checkIfAlreadyExists(newObject, existingObjects) === 0) {
            props.service.create(newObject);
            handleClear()
            props.handleClose();
        } else {
            setDoesAlreadyExist(true);
        }
    }

    const handleClear = () => {
        setCity("");
        setCityEnglish("");
        setAddress("");
        setTelephone("");
        setDescription("");
        setDoesAlreadyExist(false);
    }

    useEffect(() => {
        props.service.getAll().then(result => setExistingObjects(result.data));
    })

    return (
        <Modal show={props.show} onHide={props.handleClose} animation={true}>
            <Modal.Header>
                <Modal.Title>{props.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form autoComplete="off">
                    {
                        doesAlreadyExist &&
                        <div className="alert alert-danger" role="alert">
                            Такий об'єкт вже існує!
                        </div>
                    }
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Місто</Card.Title>
                        <Card.Text>
                            <input
                                type="text" value={city}
                                onChange={(event) =>
                                    setCity(event.target.value)}
                                className="form-control m-3"
                                style={{width: "93%"}}/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Місто англійською</Card.Title>
                        <Card.Text>
                            <input
                                type="text" value={cityEnglish}
                                onChange={(event) =>
                                    setCityEnglish(event.target.value)}
                                className="form-control m-3"
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
                                style={{width: "93%"}}/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Телефон</Card.Title>
                        <Card.Text>
                            <input
                                type="text" value={telephone}
                                onChange={(event) =>
                                    setTelephone(event.target.value)}
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
                <Button variant="info" onClick={handleClear}>
                    Clear
                </Button>
                <Button variant="primary" onClick={add}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DealershipAddModalComponent;