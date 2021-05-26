import React, {useEffect, useState} from 'react';
import EmployeeService from "../../service/EmployeeService";
import {Button, Card, Modal} from "react-bootstrap";
import {EmployeeSelectDealership} from "../../layouts/employee/EmployeeLayout";

const PurchaseEditModalComponent = (props) => {
    const [employeeOption, setEmployeeOption] = useState([]);

    const getEmployeeOptions = () => {
        if (employeeOption.length === 0) {
            EmployeeService.getAll().then(result =>
                setEmployeeOption(result.data));
        }
    }

    const [soldPrice, setSoldPrice] = useState("");
    const [purchaseDate, setPurchaseDate] = useState(null);
    const [description, setDescription] = useState("");
    const [employee, setEmployee] = useState(null);

    const update = () => {
        let newPurchase = {
            id: props.purchase.id,
            automobile: props.purchase.automobile,
            employee: employee,
            customer: props.purchase.customer,
            soldPrice: soldPrice,
            purchaseDate: purchaseDate,
            description: description,
            created_at: props.purchase.created_at,
            modified_at: props.purchase.modified_at
        }
        props.service.update(newPurchase, newPurchase.id);
        props.handleClose();
        props.setIsEdited(true);
    }

    useEffect(() => {
        getEmployeeOptions();
        setSoldPrice(props.purchase.soldPrice);
        setPurchaseDate(props.purchase.purchaseDate);
        setEmployee(props.purchase.employee);
        setDescription(props.purchase.description);
    }, [])


    return (
        <Modal show={props.show} onHide={props.handleClose} animation={true}>
            <Modal.Header>
                <Modal.Title>Edit purchase</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form autoComplete="off">
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>ID</Card.Title>
                        <Card.Text>
                            <input type="text"
                                   value={props.purchase.id}
                                   className="form-control m-3"
                                   style={{width: "93%"}}
                                   disabled/>
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Ціна</Card.Title>
                        <Card.Text>
                            <input
                                type="text" value={soldPrice}
                                onChange={(event) =>
                                    setSoldPrice(event.target.value)}
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
                                   value={purchaseDate}
                                   onChange={(event) =>
                                       setPurchaseDate(event.target.value)}
                            />
                        </Card.Text>
                    </Card>
                    <Card
                        className="mb-2 text-center"
                    >
                        <Card.Title>Продавець</Card.Title>
                        <Card.Text style={{paddingBottom: "12px"}}>
                            {employee !== null &&
                            <EmployeeSelectDealership required="true"
                                                      value={employee.id}
                                                      onChange={(event) => {
                                                          setEmployee(employeeOption.find(item => item.id === event.target.value))
                                                      }}
                            >
                                {employeeOption.filter(item => item.dealership.city
                                    === props.purchase.employee.dealership.city).map(item =>
                                    <option key={item.id} value={item.id}>{item.name}</option>
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
                                   value={props.purchase.created_at}
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
                                   value={props.purchase.modified_at}
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

export default PurchaseEditModalComponent;