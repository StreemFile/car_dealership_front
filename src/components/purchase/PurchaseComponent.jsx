import React, {useEffect, useState} from 'react';
import PurchaseService from "../../service/PurchaseService";
import {SpinnerWrapperGrid, SpinnerWrapperLayout} from "../../layouts/SpinnerWrapperLayout";
import {Card, Spinner} from "react-bootstrap";
import PurchaseInfoCardComponent from "./PurchaseInfoCardComponent";
import {AllAutomobilesWrapper} from "../../layouts/automobile/AutomobileLayout";
import moment from "moment";
import {AutomobileSortTypes} from "../automobile/AutomobileSortTypes";
import AutomobileService from "../../service/AutomobileService";
import {PurchaseSortTypes} from "./PurchaseSortTypes";

const PurchaseComponent = (props) => {
    const [purchases, setPurchases] = useState([]);
    const [customerSearch, setCustomerSearch] = useState("");
    const [employeeSearch, setEmployeeSearch] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");

    useEffect(() => {
        PurchaseService.getAll().then(result => setPurchases(result.data.sort((a, b) => a.soldPrice > b.soldPrice ? 1 : -1)))
    }, [])

    const handleSort = (event) => {
        if (event.target.value === "Зростаюча ціна") {
            return PurchaseService.getAll().then(result => setPurchases(result.data.sort((a, b) => a.soldPrice > b.soldPrice ? 1 : -1)))
        }
        if (event.target.value === "Спадаюча ціна") {
            return PurchaseService.getAll().then(result => setPurchases(result.data.sort((a, b) => a.soldPrice > b.soldPrice ? -1 : 1)))
        }
        if (event.target.value === "Автосалон") {
            return PurchaseService.getAll().then(result => setPurchases(result.data.sort((a, b) => a.employee.dealership.city > b.employee.dealership.city ? 1 : -1)))
        }
        if (event.target.value === "Спочатку старіші") {
            return PurchaseService.getAll().then(result => setPurchases(result.data.sort((a, b) => moment(a.purchaseDate).isAfter(b.purchaseDate ) ? 1 : -1)))
        }
        if (event.target.value === "Спочатку новіші") {
            return PurchaseService.getAll().then(result => setPurchases(result.data.sort((a, b) => moment(a.purchaseDate).isAfter(b.purchaseDate ) ? -1 : 1)))
        }
    }

    if (purchases.length === 0) {
        return (
            <SpinnerWrapperGrid>
                <SpinnerWrapperLayout>
                    <Spinner animation="border"/>
                </SpinnerWrapperLayout>
            </SpinnerWrapperGrid>
        )
    }

    const sortAndFilter = (purchases) => {
        return purchases.filter(item => customerSearch.length === 0 ?
            item :
            item.customer.name.toLowerCase()
                .includes(customerSearch.toLowerCase()))
            .filter(item => employeeSearch.length === 0 ?
                item :
                item.employee.name.toLowerCase()
                    .includes(employeeSearch.toLowerCase()))
            .filter(item => {
                if (dateFrom.length > 0 && dateTo.length > 0 && moment(dateFrom).isBefore(dateTo)) {
                    return !moment(item.purchaseDate).isBefore(dateFrom) && !moment(item.purchaseDate).isAfter(dateTo);
                }
                if (dateFrom.length > 0) {
                    return !moment(item.purchaseDate).isBefore(dateFrom);
                }

                if (dateTo.length > 0) {
                    return !moment(item.purchaseDate).isAfter(dateTo);
                }

                return item
            })
    }

    return (
        <AllAutomobilesWrapper>
            <div style={{color: "white"}}>
                <h3>Кількість продаж: {sortAndFilter(purchases).length}</h3>
                <select
                    style={{margin: "5px"}}
                    onChange={(event) => handleSort(event)}
                >
                    {PurchaseSortTypes.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select> <br/>
                <label>
                    Пошук за покупцем
                    <input
                        style={{margin: "5px"}}
                        type="text"
                        value={customerSearch}
                        onChange={(event) => setCustomerSearch(event.target.value)}
                    />
                </label><br/>
                <label>
                    Пошук за продавцем
                    <input
                        type="text"
                        style={{margin: "5px"}}
                        value={employeeSearch}
                        onChange={(event) => setEmployeeSearch(event.target.value)}
                    />
                </label>
                <div>
                    <label>
                        Продано з
                        <input type="date"
                               className="form-control"
                               value={dateFrom}
                               onChange={(event) =>
                                   setDateFrom(event.target.value)}
                        />
                    </label><br/>
                    <label>
                        Продано до
                        <input type="date"
                               className="form-control"
                               value={dateTo}
                               onChange={(event) =>
                                   setDateTo(event.target.value)}
                        />
                    </label>
                </div>
            </div>
            {
                sortAndFilter(purchases).map(item => {
                    return <div style={{margin: "20px"}}>
                        <PurchaseInfoCardComponent
                            key={item.id}
                            id={item.id}
                            automobileTitle={item.automobile.title}
                            automobilePrice={item.soldPrice}
                            customerName={item.customer.name}
                            employeeName={item.employee.name}
                            city={item.employee.dealership.city}
                            date={item.purchaseDate}
                        />
                    </div>
                })}
        </AllAutomobilesWrapper>
    );
}

export default PurchaseComponent;