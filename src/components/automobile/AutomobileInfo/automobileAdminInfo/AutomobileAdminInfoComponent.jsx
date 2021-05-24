import React from 'react';
import {Accordion, Card} from "react-bootstrap";
import {InfoCardAccordionWrapper} from "../../../../layouts/InfoCardLayout";
import AutomobileAdminInfoDealershipComponent from "./AutomobileAdminInfoDealershipComponent";
import AutomobileAdminInfoSpecificationComponent from "./AutomobileAdminInfoSpecificationComponent";
import AutomobileAdminInfoModelAndPackageComponent from "./AutomobileAdminInfoModelAndPackageComponent";

const AutomobileAdminInfoComponent = (props) => {
    return (
        <Card>
            <Card.Body>
                <Card.Text>
                    <InfoCardAccordionWrapper>
                        <Accordion defaultActiveKey="-1">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Детальна інформація для адміністратора
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <p>id: {props.automobile.id}</p>
                                        <p>Дата створення об'єкта: {props.automobile.created_at}</p>
                                        <p>Дата останньої модифікації об'єкта: {props.automobile.modified_at}</p>
                                        <AutomobileAdminInfoDealershipComponent
                                            dealership={props.automobile.dealership}/>
                                        <AutomobileAdminInfoSpecificationComponent
                                            title="Тип кузова"
                                            object={props.automobile.vehicleType}/>
                                        <AutomobileAdminInfoModelAndPackageComponent
                                            modelAndPackage={props.automobile.modelAndPackage}/>
                                        <AutomobileAdminInfoSpecificationComponent
                                            title="Колір автомобіля"
                                            object={props.automobile.exteriorColor}/>
                                        <AutomobileAdminInfoSpecificationComponent
                                            title="Колір салону"
                                            object={props.automobile.interiorColor}/>
                                        <AutomobileAdminInfoSpecificationComponent
                                            title="Країна пригнання"
                                            object={props.automobile.exportedFrom}/>
                                    </Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Toggle as={Card.Footer} eventKey="0">
                                    Нажміть, щоб відкрити/закрити повну інформацію
                                </Accordion.Toggle>
                            </Card>
                        </Accordion>
                    </InfoCardAccordionWrapper>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AutomobileAdminInfoComponent;