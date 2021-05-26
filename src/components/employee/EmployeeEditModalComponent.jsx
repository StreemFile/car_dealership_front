import React, {useEffect, useState} from 'react';
import DealershipService from "../../service/DealershipService";
import {Button, Card, Modal} from "react-bootstrap";
import {EmployeeSelectDealership} from "../../layouts/employee/EmployeeLayout";

const EmployeeEditModalComponent = (props) => {
    const [name, setName] = useState(props.employee.name);
    const [passport, setPassport] = useState("");
    const [telephone, setTelephone] = useState("");
    const [dealership, setDealership] = useState("");
    const [salary, setSalary] = useState("");
    const [description, setDescription] = useState("");

    const [dealershipOption, setDealershipOption] = useState([]);


    const update = () => {
        let newEmployee = {
            id: props.employee.id,
            name: name,
            passport: passport,
            telephone: telephone,
            dealership: dealership,
            salary: salary,
            description: description,
            created_at: props.employee.created_at,
            modified_at: props.employee.modified_at
        }
        props.service.update(newEmployee, newEmployee.id);
        props.setIsEdited(true);
        handleClear();
        props.handleClose();
    }

    const getDealershipOptions = () => {
        if (dealershipOption.length === 0) {
            DealershipService.getAll().then(result =>
                setDealershipOption(result.data));
        }
    }

    useEffect(() => {
        getDealershipOptions();
            setName(props.employee.name);
            setPassport(props.employee.passport);
            setTelephone(props.employee.telephone);
            setDealership(props.employee.dealership);
            setSalary(props.employee.salary);
            setDescription(props.employee.description);
    }, [props.employee])

    const handleClear = () => {
        setName("");
        setPassport("");
        setTelephone("");
        setSalary("");
        setDescription("");
        setDealership("");
    }

    return (
        <Modal show={props.show} onHide={props.handleClose} animation={true}>
            <Modal.Header>
                <Modal.Title>Edit employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form autoComplete="off">
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>ID</Card.Title>
                        <Card.Text>
                            <input type="text"
                                   value={props.employee.id}
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
                            {dealership !== undefined &&
                            <EmployeeSelectDealership required="true"
                                                      value={dealership.id}
                                                      onChange={(event) => {
                                                          DealershipService.getById(event.target.value)
                                                              .then(result => setDealership(result.data))
                                                      }}
                            >
                                {dealershipOption.map(item =>
                                    <option key={item.id} value={item.id}>{item.city}</option>
                                )}
                            </EmployeeSelectDealership>
                            }
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
                                   value={props.employee.created_at}
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
                                   value={props.employee.modified_at}
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

export default EmployeeEditModalComponent;