import React, {useEffect, useState} from 'react';
import {AutomobileByIdWrapper} from "../../layouts/automobile/AutomobileLayout";
import {NavLink, useParams} from "react-router-dom";
import AutomobileService from "../../service/AutomobileService";
import {Button, Spinner} from "react-bootstrap";
import {SpinnerWrapperGrid, SpinnerWrapperLayout} from "../../layouts/SpinnerWrapperLayout";
import AutomobileDeleteModalComponent from "./AutomobileDeleteModalComponent";
import AutomobileInOrderService from "../../service/AutomobileInOrderService";
import AutomobileShowAddCustomerForSoldComponent from "./AutomobileShowAddCustomerForSoldComponent";
import PurchaseService from "../../service/PurchaseService";
import AutomobileAllInfo from "./AutomobileInfo/AutomobileAllInfo";

const AutomobileByIdComponent = (props) => {
    const {id} = useParams()
    const [automobile, setAutomobile] = useState(null);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    const [customer, setCustomer] = useState(null);
    const [showCustomer, setShowCustomer] = useState();
    const handleCloseCustomer = () => setShowCustomer(false);

    const [showEmployeeAndPrice ,setShowEmployeeAndPrice] = useState();
    const handleCloseShowEmployeeAndPrice = () => setShowEmployeeAndPrice(false);
    const handleOpenShowEmployeeAndPrice = () => setShowEmployeeAndPrice(true);

    const [employee, setEmployee] = useState(null);
    const [soldPrice, setSoldPrice] = useState("");
    const [purchaseDate, setPurchaseDate] = useState("");
    const [description, setDescription] = useState("");

    const handleArrived = () => {
        let auto = {...automobile, availability: "В наявності"};
        setAutomobile(auto);
        AutomobileService.update(auto, auto.id);
        AutomobileInOrderService.deleteByAutomobileId(auto.id);
    }

    const handleSold = () => {
        setShowCustomer(true);
        let auto = {...automobile, availability: "Проданий"};
        setAutomobile(auto);
        AutomobileService.update(auto, auto.id);
    }


    const [isSold, setIsSold] = useState(false);
    useEffect(() => {
        AutomobileService.getById(id).then(result => setAutomobile(result.data));
        if(isSold){
            debugger;
            let purchase = {
                id: null,
                automobile: automobile,
                customer: customer,
                employee: employee,
                soldPrice: soldPrice,
                // purchaseDate:  purchaseDate,
                purchaseDate:  purchaseDate,
                description: description,
                created_at: null,
                modified_at: null
            }
            PurchaseService.create(purchase)
            setIsSold(false);
        }
    }, [automobile,isSold])

    if (automobile === null) {
        return (
            <SpinnerWrapperGrid>
                <SpinnerWrapperLayout>
                    <Spinner animation="border"/>
                </SpinnerWrapperLayout>
            </SpinnerWrapperGrid>
        )
    }

    return (
        <AutomobileByIdWrapper>
            <AutomobileAllInfo automobile={automobile}/>
            {
                automobile.availability === "Замовлений" &&
                <Button variant="success" className="m-3" onClick={handleArrived}>
                    Прибув у автосалон
                </Button>
            }
            {
                automobile.availability === "В наявності" &&
                <Button variant="success" className="m-3" onClick={handleSold}>
                    Проданий
                </Button>
            }
            <NavLink to={`/automobile/edit/${automobile.id}`}>
                <Button variant="info" className="m-3">
                    Edit
                </Button>{' '}
            </NavLink>
            <Button variant="danger" onClick={handleShowDelete} className="m-3">
                Delete
            </Button>{' '}

            <AutomobileShowAddCustomerForSoldComponent
                show={showCustomer}
                handleClose={handleCloseCustomer}
                handleOpenShowEmployeeAndPrice={handleOpenShowEmployeeAndPrice}
                setCustomer={setCustomer}
                setIsSold={setIsSold}
                setEmployee={setEmployee}
                description={description}
                setDescription={setDescription}
                purchaseDate={purchaseDate}
                setPurchaseDate={setPurchaseDate}
                soldPrice={soldPrice}
                setSoldPrice={setSoldPrice}
                city={automobile.dealership.city}
                expectedSellingPrice={automobile.expectedSellingPrice}
            />

            <AutomobileDeleteModalComponent
                show={showDelete}
                handleClose={handleCloseDelete}
                service={AutomobileService}
                object={automobile}
            />

        </AutomobileByIdWrapper>
    );
}

export default AutomobileByIdComponent;