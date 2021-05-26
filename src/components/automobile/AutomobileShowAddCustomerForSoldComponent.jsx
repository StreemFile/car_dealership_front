import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Button, Card, Modal} from "react-bootstrap";
import CustomerService from "../../service/CustomerService";
import EmployeeService from "../../service/EmployeeService";
import {EmployeeSelectDealership} from "../../layouts/employee/EmployeeLayout";
import moment from "moment";

const AutomobileShowAddCustomerForSoldComponent = (props) => {

    const [customerOptions, setCustomerOptions] = useState([]);
    const [employeeOptions, setEmployeeOptions] = useState([]);

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
        return customerOptions.filter(item =>
            item.passport === passport).length
    }


    const add = () => {
        if (checkIfPassportAlreadyExists() === 0) {
            let newCustomer = {
                id: uuidv4().toString(),
                name: name,
                passport: passport,
                telephone: telephone,
                placeOfResidence: placeOfResidence,
                address: address,
                description: description,
                created_at: new Date().toISOString(),
                modified_at: new Date().toISOString()
            }
            CustomerService.create(newCustomer)
            props.setCustomer(newCustomer);
        }
        if (checkIfPassportAlreadyExists() !== 0) {
            props.setCustomer(customerOptions.find(item => item.passport === passport))
        }
        props.setIsSold(true);
        handleClear();
        props.handleClose();
    }

    const addNewCustomer = () => {
        if (isAdded) {
            setIsAdded(false);
            add();
        }
    }

    useEffect(() => {
        if(customerOptions.length === 0) {
            CustomerService.getAll().then(result => setCustomerOptions(result.data));
        }
        if(employeeOptions.length === 0) {
            EmployeeService.getAll().then(result => setEmployeeOptions(result.data))
        }
        if(isAdded) {
            addNewCustomer()
        }
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

    const handleNameChange = (event) => {
        setName(event.target.value);
        if(customerOptions.map(item => item.name).includes(event.target.value)){
            let cus = customerOptions.find(item => item.name === event.target.value);
            setPassport(cus.passport);
            setTelephone(cus.telephone);
            setPlaceOfResidence(cus.placeOfResidence);
            setAddress(cus.address);
            setDescription(cus.description);
        }
    }

    const handlePassportChange = (event) => {
        setPassport(event.target.value);
        if(customerOptions.map(item => item.passport).includes(event.target.value)){
            let cus = customerOptions.find(item => item.passport === event.target.value);
            setName(cus.name);
            setTelephone(cus.telephone);
            setPlaceOfResidence(cus.placeOfResidence);
            setAddress(cus.address);
            setDescription(cus.description);
        }
    }

    return (
        <Modal show={props.show} onHide={props.handleClose} animation={true}>
            <Modal.Header>
                <Modal.Title>Add info to purchase</Modal.Title>
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
                                name="PIPList"
                                list="PIPList"
                                onChange={(event) => handleNameChange(event)}
                                className="form-control m-3"
                                style={{width: "93%"}}/>
                            {name.length >=3 && <datalist id="PIPList">
                                {customerOptions.map(item => {
                                    return <option key={item.id} value={item.name}/>
                                })}
                            </datalist>}
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
                                name="passportList"
                                list="passportList"
                                onChange={(event) =>
                                    handlePassportChange(event)}
                                className="form-control m-3"
                                style={{width: "93%"}}/>
                            {passport.length >= 4 &&  <datalist id="passportList">
                                {customerOptions.map(item => {
                                    return <option key={item.id} value={item.passport}/>
                                })}
                            </datalist>}
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
                        className="mb-2 p-3 text-center"
                    >
                        <Card.Title>Опис покупця</Card.Title>
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
                        <Card.Title>Виберіть продавця</Card.Title>
                        <Card.Text>
                            <EmployeeSelectDealership required="true"
                                                      onChange={(event) => {
                                                          props.setEmployee(employeeOptions.find(item => item.id === event.target.value));
                                                      }}
                            >
                                <option
                                    selected="selected"
                                    style={{display: "none"}}
                                >
                                    Виберіть продавця
                                </option>

                                {employeeOptions.filter(item => item.dealership.city === props.city).map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )}
                            </EmployeeSelectDealership>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Ціна</Card.Title>
                        <Card.Text>
                            <input
                                type="number" value={props.soldPrice}
                                onChange={(event) =>
                                    props.setSoldPrice(event.target.value)}
                                className="form-control m-3"
                                style={{width: "93%"}}/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Дата продажі</Card.Title>
                        <Card.Text>
                                <input type="date"
                                       className="form-control"
                                       onChange={(event) =>
                                           props.setPurchaseDate(event.target.value)}
                                      />
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 p-3 text-center"
                    >
                        <Card.Title>Опис продажі</Card.Title>
                        <Card.Text>
                            <textarea
                                value={props.description}
                                onChange={(event) =>
                                    props.setDescription(event.target.value)}
                                className="form-control m-3"
                                style={{height: "300px", width: "93%"}}/>

                        </Card.Text>
                    </Card>
                </form>
            </Modal.Body>
            <Modal.Footer>
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

export default AutomobileShowAddCustomerForSoldComponent;