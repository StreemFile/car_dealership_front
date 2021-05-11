import React, {useEffect, useState} from 'react';
import {Accordion, Card} from "react-bootstrap";
import CompanyInfoCardsComponent from "../company/CompanyInfoCardsComponent";
import {InfoCardAccordionWrapper} from "../../layouts/InfoCardLayout";

const DealershipInfoCardsComponent = (props) => {

    return (
        <div>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>ID</Card.Title>
                <Card.Text>{props.dealership.id}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Місто</Card.Title>
                <Card.Text>{props.dealership.city}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Адрес</Card.Title>
                <Card.Text>{props.dealership.address}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Телефон</Card.Title>
                <Card.Text>{props.dealership.telephone}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Опис</Card.Title>
                <Card.Text>{props.dealership.description}</Card.Text>
            </Card>
            {props.dealership.company !== undefined && <Card
                className="mb-2 text-center"
            >
                <Card.Title>Компанія</Card.Title>
                <Card.Text style={{display: 'grid'}}>
                    <InfoCardAccordionWrapper>
                        <Accordion defaultActiveKey="-1">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    {props.dealership.company.name}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <CompanyInfoCardsComponent
                                            company={props.dealership.company}
                                        />
                                    </Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Toggle as={Card.Footer} eventKey="0">
                                    Нажміть, щоб відкрити/закрити повну інформацію
                                </Accordion.Toggle>
                            </Card>
                        </Accordion>
                    </InfoCardAccordionWrapper>
                </Card.Text>
            </Card>}
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Місто англійською</Card.Title>
                <Card.Text>{props.dealership.cityEnglish}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Дата створення</Card.Title>
                <Card.Text>{props.dealership.created_at}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Дата останньої модифікації</Card.Title>
                <Card.Text>{props.dealership.modified_at}</Card.Text>
            </Card>
        </div>
    );
}

export default DealershipInfoCardsComponent;