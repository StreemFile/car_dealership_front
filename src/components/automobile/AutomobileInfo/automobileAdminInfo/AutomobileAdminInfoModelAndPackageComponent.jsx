import React from 'react';
import {Accordion, Card} from "react-bootstrap";
import {InfoCardAccordionWrapper} from "../../../../layouts/InfoCardLayout";
import ModelAndPackageInfoCardsComponent
    from "../../../carSpecifications/modelAndPackage/ModelAndPackageInfoCardsComponent";

const AutomobileAdminInfoModelAndPackageComponent = (props) => {
    return (
        <Card
            className="mb-2 text-center"
        >
            <Card.Title>Марка, модель</Card.Title>
            <Card.Text style={{display: 'grid'}}>
                <InfoCardAccordionWrapper>
                    <Accordion defaultActiveKey="-1">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                {props.modelAndPackage.make.name} {props.modelAndPackage.model}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <ModelAndPackageInfoCardsComponent
                                        object={props.modelAndPackage}
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

export default AutomobileAdminInfoModelAndPackageComponent;