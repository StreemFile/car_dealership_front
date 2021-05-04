import React from 'react';
import {Accordion, Card} from "react-bootstrap";
import {CarSpecificationWrapper} from "../../layouts/carSpecifications/CarSpecificationLayout";
import VehicleTypeComponent from "./vehicleType/VehicleTypeComponent";
import MakeComponent from "./make/MakeComponent";
import InteriorColorComponent from "./interiorColor/InteriorColorComponent";
import ExteriorColorComponent from "./exteriorColor/ExteriorColorComponent";
import ProducingCountryComponent from "./producingCountry/ProducingCountryComponent";

const AutomobileSpecificationComponent = () => {
    return (
        <CarSpecificationWrapper>
            <Accordion>
                <VehicleTypeComponent/>
                <MakeComponent/>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        Модель
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
               <InteriorColorComponent/>
                <ExteriorColorComponent/>
                <ProducingCountryComponent/>
            </Accordion>
        </CarSpecificationWrapper>
    );
}

export default AutomobileSpecificationComponent;