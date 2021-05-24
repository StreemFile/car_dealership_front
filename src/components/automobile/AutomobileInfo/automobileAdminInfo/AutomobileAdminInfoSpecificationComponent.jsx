import React from 'react';
import {Accordion, Card} from "react-bootstrap";
import {InfoCardAccordionWrapper} from "../../../../layouts/InfoCardLayout";
import AutomobileSpecificationInfoCardsComponent
    from "../../../carSpecifications/AutomobileSpecificationInfoCardsComponent";

const AutomobileAdminInfoSpecificationComponent = (props) => {
    return (
        <Card
            className="mb-2 text-center"
        >
            <Card.Title>{props.title}</Card.Title>
            <Card.Text style={{display: 'grid'}}>
                <InfoCardAccordionWrapper>
                    <Accordion defaultActiveKey="-1">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                {props.object.name}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <AutomobileSpecificationInfoCardsComponent
                                        object={props.object}
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

export default AutomobileAdminInfoSpecificationComponent;