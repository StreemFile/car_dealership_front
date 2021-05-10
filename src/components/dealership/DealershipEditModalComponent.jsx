import React, {useEffect, useState} from 'react';
import {Button, Card, Modal} from "react-bootstrap";
import DealershipService from "../../service/DealershipService";

const DealershipEditModalComponent = (props) => {
    const [isUpdated, setIsUpdated] = useState(false);

    const [city, setCity] = useState(props.dealership.city);
    const [cityEnglish, setCityEnglish] = useState(props.dealership.cityEnglish);
    const [address, setAddress] = useState(props.dealership.address);
    const [telephone, setTelephone] = useState(props.dealership.telephone);
    const [description, setDescription] = useState(props.dealership.description);

    const editDealership = () => {
        const newCompany = {
            id: props.dealership.id,
            city: city,
            cityEnglish: cityEnglish,
            address: address,
            telephone: telephone,
            company: props.dealership.company,
            description: description,
            created_at: props.dealership.created_at,
            modified_at: props.dealership.modified_at
        }

        DealershipService.update(newCompany, newCompany.id);
        props.handleClose();
    }

    useEffect(() => {
        editDealership();
        setIsUpdated(false);
    }, [isUpdated])

    return (
        <Modal show={props.show} onHide={props.handleCloseEditModal} animation={true}>
            <Modal.Header>
                <Modal.Title>Edit dealership</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form autoComplete="off">
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>ID</Card.Title>
                        <Card.Text>
                            <input type="text"
                                   value={props.dealership.id}
                                   className="form-control m-3"
                                   style={{width: "93%"}}
                                   disabled/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Місто</Card.Title>
                        <Card.Text>
                            <input
                                type="text"
                                value={city}
                                onChange={(event) =>
                                    setCity(event.target.value)}
                                className="form-control m-3"
                                style={{width: "93%"}}/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Місто англійською мовою</Card.Title>
                        <Card.Text>
                            <input
                                type="text"
                                value={cityEnglish}
                                onChange={(event) =>
                                    setCityEnglish(event.target.value)}
                                className="form-control m-3"
                                style={{width: "93%"}}/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Адреса</Card.Title>
                        <Card.Text>
                            <input
                                type="text"
                                value={address}
                                onChange={(event) =>
                                    setAddress(event.target.value)}
                                className="form-control m-3"
                                style={{width: "93%"}}/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Номер телефону тех. підтримки</Card.Title>
                        <Card.Text>
                            <input
                                type="text"
                                value={telephone}
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
                                type="text"
                                value={description}
                                onChange={(event) =>
                                    setDescription(event.target.value)}
                                      className="form-control m-3"
                                      style={{height: "300px", width: "93%" }}>
                            </textarea>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Дата створення</Card.Title>
                        <Card.Text>
                            <input type="text"
                                   value={props.dealership.created_at}
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
                                   value={props.dealership.modified_at}
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
                <Button variant="primary" onClick={() => setIsUpdated(true)}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DealershipEditModalComponent;