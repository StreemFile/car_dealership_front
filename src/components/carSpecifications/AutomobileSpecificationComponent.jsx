import React from 'react';
import {Accordion, Card} from "react-bootstrap";
import {CarSpecificationWrapper} from "../../layouts/carSpecifications/CarSpecificationLayout";
import VehicleTypeComponent from "./vehicleType/VehicleTypeComponent";

const AutomobileSpecificationComponent = () => {
    return (
        <CarSpecificationWrapper>
            <Accordion>
                <VehicleTypeComponent/>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Марка
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        Модель
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                        Колір салону
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                        Колір автомобіля
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                        Країна пригнання
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </CarSpecificationWrapper>
    );
}

export default AutomobileSpecificationComponent;