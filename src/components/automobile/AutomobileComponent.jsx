import React, {useEffect, useState} from 'react';
import AutomobileService from "../../service/AutomobileService";
import {AllAutomobilesWrapper} from "../../layouts/automobile/AutomobileLayout";
import {Spinner} from "react-bootstrap";
import {SpinnerWrapperGrid, SpinnerWrapperLayout} from "../../layouts/SpinnerWrapperLayout";
import AutomobileInfoCardsComponent from "./AutomobileInfoCardsComponent";

const AutomobileComponent = (props) => {
    const [automobiles, setAutomobiles] = useState([]);

    useEffect(() => {
        AutomobileService.getAll().then(result => {
            setAutomobiles(result.data);
        })
    }, [automobiles])

    if (automobiles.length === 0) {
        return (
            <SpinnerWrapperGrid>
                <SpinnerWrapperLayout>
                    <Spinner animation="border"/>
                </SpinnerWrapperLayout>
            </SpinnerWrapperGrid>
        )
    }

    return (
        <AllAutomobilesWrapper>
            {automobiles.map(item => {
                return <div style={{margin: "20px"}}>
                    <AutomobileInfoCardsComponent
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.expectedSellingPrice}
                        vehicleType={item.vehicleType.name}
                        make={item.modelAndPackage.make.name}
                        model={item.modelAndPackage.model}
                        year={item.manufactureYear}
                        mileage={item.mileage}
                        color={item.exteriorColor.name}
                        fuelType={item.engine.fuelType}
                        transmissionType={item.engine.transmissionType}
                        cubicCapacity={item.engine.cubicCapacity}
                    />
                </div>
            })}
        </AllAutomobilesWrapper>
    );
}

    export default AutomobileComponent;