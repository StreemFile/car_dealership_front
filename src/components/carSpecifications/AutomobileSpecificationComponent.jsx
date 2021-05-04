import React from 'react';
import {Accordion, Card} from "react-bootstrap";
import {CarSpecificationWrapper} from "../../layouts/carSpecifications/CarSpecificationLayout";
import VehicleTypeComponent from "./vehicleType/VehicleTypeComponent";
import MakeComponent from "./make/MakeComponent";
import InteriorColorComponent from "./interiorColor/InteriorColorComponent";
import ExteriorColorComponent from "./exteriorColor/ExteriorColorComponent";
import ProducingCountryComponent from "./producingCountry/ProducingCountryComponent";
import ModelAndPackageComponent from "./modelAndPackage/ModelAndPackageComponent";

const AutomobileSpecificationComponent = () => {
    return (
        <CarSpecificationWrapper>
            <Accordion>
                <VehicleTypeComponent/>
                <MakeComponent/>
                <ModelAndPackageComponent/>
                <InteriorColorComponent/>
                <ExteriorColorComponent/>
                <ProducingCountryComponent/>
            </Accordion>
        </CarSpecificationWrapper>
    );
}

export default AutomobileSpecificationComponent;