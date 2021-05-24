import React from 'react';
import {Accordion, Card} from "react-bootstrap";
import {InfoCardAccordionWrapper} from "../../layouts/InfoCardLayout";
import DealershipInfoCardsComponent from "../dealership/DealershipInfoCardsComponent";

const EmployeeInfoCardsComponent = (props) => {
    return (
        <div>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>ID</Card.Title>
                <Card.Text>{props.employee.id}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>ПІП</Card.Title>
                <Card.Text>{props.employee.name}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Номер паспорта</Card.Title>
                <Card.Text>{props.employee.passport}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Номер телефона</Card.Title>
                <Card.Text>{props.employee.telephone}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Зарплата</Card.Title>
                <Card.Text>{props.employee.salary}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Автосалон</Card.Title>
                <Card.Text style={{display: 'grid'}}>
                    <InfoCardAccordionWrapper>
                        {props.employee.dealership !== undefined
                        &&
                        <Accordion defaultActiveKey="-1">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    {props.employee.dealership.city}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <DealershipInfoCardsComponent
                                            dealership={props.employee.dealership}
                                        />
                                    </Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Toggle as={Card.Footer} eventKey="0">
                                    Нажміть, щоб відкрити/закрити повну інформацію
                                </Accordion.Toggle>
                            </Card>
                        </Accordion>
                        }
                    </InfoCardAccordionWrapper>
                </Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Опис</Card.Title>
                <Card.Text>{props.employee.description}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Дата створення</Card.Title>
                <Card.Text>{props.employee.created_at}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Дата останньої модифікації</Card.Title>
                <Card.Text>{props.employee.modified_at}</Card.Text>
            </Card>
        </div>
    );
}

export default EmployeeInfoCardsComponent;