import React from 'react';
import {Accordion, Card} from "react-bootstrap";
import {InfoCardAccordionWrapper} from "../../../layouts/InfoCardLayout";
import CompanyInfoCardsComponent from "../../company/CompanyInfoCardsComponent";
import AutomobileSpecificationInfoCardsComponent from "../AutomobileSpecificationInfoCardsComponent";

const ModelAndPackageInfoCardsComponent = (props) => {
    return <>
        <Card
            className="mb-2 text-center"
        >
            <Card.Title>ID</Card.Title>
            <Card.Text>{props.object.id}</Card.Text>
        </Card>
        <Card
            className="mb-2 text-center"
        >
            <Card.Title>Марка</Card.Title>
            {
                props.object.make !== undefined
                && <Card.Text style={{display: 'grid'}}>
                    <InfoCardAccordionWrapper>
                        <Accordion defaultActiveKey="-1">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    {props.object.make.name}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <AutomobileSpecificationInfoCardsComponent
                                            object={props.object.make}
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
            }
        </Card>
        <Card
            className="mb-2 text-center"
        >
            <Card.Title>Модель</Card.Title>
            <Card.Text>{props.object.model}</Card.Text>
        </Card>
        <Card
            className="mb-2 text-center"
        >
            <Card.Title>Комплектація</Card.Title>
            <Card.Text>{props.object.pack}</Card.Text>
        </Card>
        <Card
            className="mb-2 text-center"
        >
            <Card.Title>Опис</Card.Title>
            <Card.Text>{props.object.description}</Card.Text>
        </Card>
        <Card
            className="mb-2 text-center"
        >
            <Card.Title>Дата створення</Card.Title>
            <Card.Text>{props.object.created_at}</Card.Text>
        </Card>
        <Card
            className="mb-2 text-center"
        >
            <Card.Title>Дата останньої модифікації</Card.Title>
            <Card.Text>{props.object.modified_at}</Card.Text>
        </Card>
    </>;
}

export default ModelAndPackageInfoCardsComponent;