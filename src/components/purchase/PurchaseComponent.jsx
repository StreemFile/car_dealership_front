import React, {useEffect, useState} from 'react';
import PurchaseService from "../../service/PurchaseService";
import {SpinnerWrapperGrid, SpinnerWrapperLayout} from "../../layouts/SpinnerWrapperLayout";
import {Spinner} from "react-bootstrap";
import PurchaseInfoCardComponent from "./PurchaseInfoCardComponent";
import {AllAutomobilesWrapper} from "../../layouts/automobile/AutomobileLayout";

const PurchaseComponent = (props) => {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
            PurchaseService.getAll().then(result => setPurchases(result.data))
    })

    if (purchases.length === 0) {
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
            {purchases.map(item => {
                return <div style={{margin: "20px"}}>
                    <PurchaseInfoCardComponent
                        key={item.id}
                        id={item.id}
                        automobileTitle={item.automobile.title}
                        automobilePrice={item.soldPrice}
                        customerName={item.customer.name}
                        employeeName={item.employee.name}
                        city={item.employee.dealership.city}
                    />
                </div>
            })}
        </AllAutomobilesWrapper>
    );
}

export default PurchaseComponent;