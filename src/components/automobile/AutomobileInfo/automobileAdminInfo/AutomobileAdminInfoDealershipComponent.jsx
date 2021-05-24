import React from 'react';
import {Accordion, Card} from "react-bootstrap";
import {InfoCardAccordionWrapper} from "../../../../layouts/InfoCardLayout";
import DealershipInfoCardsComponent from "../../../dealership/DealershipInfoCardsComponent";

const AutomobileAdminInfoDealershipComponent = (props) => {
    return (
        <Card
            className="mb-2 text-center"
        >
            <Card.Title>Автосалон</Card.Title>
            <Card.Text style={{display: 'grid'}}>
                <InfoCardAccordionWrapper>
                    <Accordion defaultActiveKey="-1">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                {props.dealership.city}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <DealershipInfoCardsComponent
                                        dealership={props.dealership}
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
        </Card>
    );
}

export default AutomobileAdminInfoDealershipComponent;