import React, {useEffect, useState} from 'react';
import {Button, Card, Modal} from "react-bootstrap";
import DealershipService from "../../service/DealershipService";
import {EmployeeSelectDealership} from "../../layouts/employee/EmployeeLayout";

const EmployeeAddModalComponent = (props) => {

    const [name, setName] = useState("");
    const [passport, setPassport] = useState("");
    const [telephone, setTelephone] = useState("");
    const [dealership, setDealership] = useState("");
    const [salary, setSalary] = useState("");
    const [description, setDescription] = useState("");

    const [dealershipOption, setDealershipOption] = useState([]);

    const [doesPassportAlreadyExist, setDoesPassportAlreadyExist] = useState(false);
    const [doesTelephoneAlreadyExist, setDoesTelephoneAlreadyExist] = useState(false);

    const [isAdded, setIsAdded] = useState(false);

    const checkIfPassportAlreadyExists = () => {
        return props.employees.filter(item =>
            item.passport === passport).length
    }

    const checkIfTelephoneAlreadyExists = () => {
        return props.employees.filter(item =>
            item.telephone === telephone).length
    }


    const add = () => {
        if (checkIfTelephoneAlreadyExists() === 0
            && checkIfPassportAlreadyExists() === 0) {
            let newEmployee = {
                id: null,
                name: name,
                passport: passport,
                telephone: telephone,
                dealership: dealership,
                salary: salary,
                description: "",
                created_at: null,
                modified_at: null
            }
            props.service.create(newEmployee);
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

    const getDealershipOptions = () => {
        if (dealershipOption.length === 0) {
            DealershipService.getAll().then(result =>
                setDealershipOption(result.data));
        }
    }

    const addNewEmployee = () => {
        if (isAdded) {
            setIsAdded(false);
            add();
        }
    }

    useEffect(() => {
        getDealershipOptions();
        addNewEmployee()
    }, [add, isAdded])

    const handleClear = () => {
        setName("");
        setPassport("");
        setTelephone("");
        setSalary("");
        setDescription("");
        setDealership("Виберіть автосалон");
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
                    {
                        doesPassportAlreadyExist &&
                        <div className="alert alert-danger" role="alert">
                            Об'єкт з таким номером паспорта вже існує!
                        </div>
                    }
                    {
                        doesTelephoneAlreadyExist &&
                        <div className="alert alert-danger" role="alert">
                            Об'єкт з таким номером телефона вже існує!
                        </div>
                    }

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
                        <Card.Title>Зарплата</Card.Title>
                        <Card.Text>
                            <input
                                type="text" value={salary}
                                onChange={(event) =>
                                    setSalary(event.target.value)}
                                className="form-control m-3"
                                placeholder="Введіть комплектацію"
                                style={{width: "93%"}}/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Автосалон</Card.Title>
                        <Card.Text style={{paddingBottom: "12px"}}>
                            <EmployeeSelectDealership required="true"
                                                      onChange={(event) => {
                                                          DealershipService.getById(event.target.value)
                                                              .then(result => setDealership(result.data))
                                                      }
                                                      }
                            >
                                <option
                                    selected="selected"
                                    style={{display: "none"}}
                                >
                                    Виберіть автосалон
                                </option>

                                {dealershipOption.map(item =>
                                    <option key={item.id} value={item.id}>{item.city}</option>
                                )}
                            </EmployeeSelectDealership>
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

export default EmployeeAddModalComponent;