import React, {useEffect, useState} from 'react';
import AutomobileService from "../../service/AutomobileService";
import {AllAutomobilesWrapper} from "../../layouts/automobile/AutomobileLayout";
import {Spinner} from "react-bootstrap";
import {SpinnerWrapperGrid, SpinnerWrapperLayout} from "../../layouts/SpinnerWrapperLayout";
import AutomobileInfoCardsComponent from "./AutomobileInfoCardsComponent";
import {AutomobileSortTypes} from "./AutomobileSortTypes";

const AutomobileInStockComponent = (props) => {
    const [automobiles, setAutomobiles] = useState([]);
    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");
    const [yearFrom, setYearFrom] = useState("");
    const [yearTo, setYearTo] = useState("");
    const [mileageFrom, setMileageFrom] = useState("");
    const [mileageTo, setMileageTo] = useState("");

    useEffect(() => {
        AutomobileService.getAll().then(result => {
            setAutomobiles(result.data.filter(item => item.availability === "В наявності").sort((a, b) => a.expectedSellingPrice > b.expectedSellingPrice ? 1 : -1));
        })

    }, [])

    const handleSort = (event) => {
        if (event.target.value === "Зростаюча ціна") {
            return AutomobileService.getAll().then(result => setAutomobiles(result.data.filter(item => item.availability === "В наявності").sort((a, b) => a.expectedSellingPrice > b.expectedSellingPrice ? 1 : -1)))
        }
        if (event.target.value === "Спадаюча ціна") {
            return AutomobileService.getAll().then(result => setAutomobiles(result.data.filter(item => item.availability === "В наявності").sort((a, b) => a.expectedSellingPrice > b.expectedSellingPrice ? -1 : 1)))
        }
        if (event.target.value === "Марка") {
            return AutomobileService.getAll().then(result => setAutomobiles(result.data.filter(item => item.availability === "В наявності").sort((a, b) => a.modelAndPackage.make.name > b.modelAndPackage.make.name ? -1 : 1)))
        }
        if (event.target.value === "Модель") {
            return AutomobileService.getAll().then(result => setAutomobiles(result.data.filter(item => item.availability === "В наявності").sort((a, b) => a.modelAndPackage.model > b.modelAndPackage.model ? -1 : 1)))
        }
        if (event.target.value === "Зростаючий рік випуску") {
            return AutomobileService.getAll().then(result => setAutomobiles(result.data.filter(item => item.availability === "В наявності").sort((a, b) => a.manufactureYear > b.manufactureYear ? 1 : -1)))
        }
        if (event.target.value === "Спадаючий рік випуску") {
            return AutomobileService.getAll().then(result => setAutomobiles(result.data.filter(item => item.availability === "В наявності").sort((a, b) => a.manufactureYear > b.manufactureYear ? -1 : 1)))
        }
        if (event.target.value === "Зростаюча кубатура") {
            return AutomobileService.getAll().then(result => setAutomobiles(result.data.filter(item => item.availability === "В наявності").sort((a, b) => a.engine.cubicCapacity > b.engine.cubicCapacity ? 1 : -1)))
        }
        if (event.target.value === "Спадаюча кубатура") {
            return AutomobileService.getAll().then(result => setAutomobiles(result.data.filter(item => item.availability === "В наявності").sort((a, b) => a.engine.cubicCapacity > b.engine.cubicCapacity ? -1 : 1)))
        }
    }

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
            <div style={{color: "white"}}>
                <h3>Кількість автомобілів: {automobiles.filter(item => {
                    if (priceFrom.length > 0 && priceTo.length > 0 && parseInt(priceTo) > parseInt(priceFrom)) {
                        return item.expectedSellingPrice >= priceFrom && item.expectedSellingPrice <= priceTo
                    }
                    if (priceFrom.length > 0) {
                        return item.expectedSellingPrice >= priceFrom
                    }
                    if (priceTo.length > 0) {
                        return item.expectedSellingPrice <= priceTo
                    }
                    return item;
                })
                    .filter(item => {
                        if (yearFrom.length > 0 && yearTo.length > 0 && parseInt(yearTo) > parseInt(yearFrom)) {
                            return item.manufactureYear >= yearFrom && item.manufactureYear <= yearTo
                        }
                        if (yearFrom.length > 0) {
                            return item.manufactureYear >= yearFrom
                        }
                        if (yearTo.length > 0) {
                            return item.manufactureYear <= yearTo
                        }
                        return item;
                    })
                    .filter(item => {
                        if (mileageFrom.length > 0 && mileageTo.length > 0 && parseInt(mileageTo) > parseInt(mileageFrom)) {
                            return item.mileage >= mileageFrom && item.mileage <= mileageTo
                        }
                        if (mileageFrom.length > 0) {
                            return item.mileage >= mileageFrom
                        }
                        if (mileageTo.length > 0) {
                            return item.mileage <= mileageTo
                        }
                        return item;
                    }).length}</h3>
                <label>Сортування:
                    <select
                        style={{margin: "5px"}}
                        onChange={(event) => handleSort(event)}
                    >
                        {AutomobileSortTypes.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </label><br/>
                <label>Ціна від:
                    <input
                        style={{margin: "5px"}}
                        type="text"
                        value={priceFrom}
                        onChange={event => setPriceFrom(event.target.value)}
                    />
                </label>
                <label>Ціна до:
                    <input
                        style={{margin: "5px"}}
                        type="text"
                        value={priceTo}
                        onChange={event => setPriceTo(event.target.value)}
                    />
                </label><br/>
                <label>Рік випуску від:
                    <input
                        style={{margin: "5px"}}
                        type="text"
                        value={yearFrom}
                        onChange={event => setYearFrom(event.target.value)}
                    />
                </label>
                <label>Рік випуску до:
                    <input
                        style={{margin: "5px"}}
                        type="text"
                        value={yearTo}
                        onChange={event => setYearTo(event.target.value)}
                    />
                </label><br/>
                <label>Пробіг від:
                    <input
                        style={{margin: "5px"}}
                        type="text"
                        value={mileageFrom}
                        onChange={event => setMileageFrom(event.target.value)}
                    />
                </label>
                <label>Пробіг до:
                    <input
                        style={{margin: "5px"}}
                        type="text"
                        value={mileageTo}
                        onChange={event => setMileageTo(event.target.value)}
                    />
                </label>
            </div>
            {automobiles.filter(item => {
                if (priceFrom.length > 0 && priceTo.length > 0 && parseInt(priceTo) > parseInt(priceFrom)) {
                return item.expectedSellingPrice >= priceFrom && item.expectedSellingPrice <= priceTo
            }
                if (priceFrom.length > 0) {
                return item.expectedSellingPrice >= priceFrom
            }
                if (priceTo.length > 0) {
                return item.expectedSellingPrice <= priceTo
            }
                return item;
            })
                .filter(item => {
                if (yearFrom.length > 0 && yearTo.length > 0 && parseInt(yearTo) > parseInt(yearFrom)) {
                return item.manufactureYear >= yearFrom && item.manufactureYear <= yearTo
            }
                if (yearFrom.length > 0) {
                return item.manufactureYear >= yearFrom
            }
                if (yearTo.length > 0) {
                return item.manufactureYear <= yearTo
            }
                return item;
            })
                .filter(item => {
                if (mileageFrom.length > 0 && mileageTo.length > 0 && parseInt(mileageTo) > parseInt(mileageFrom)) {
                return item.mileage >= mileageFrom && item.mileage <= mileageTo
            }
                if (mileageFrom.length > 0) {
                return item.mileage >= mileageFrom
            }
                if (mileageTo.length > 0) {
                return item.mileage <= mileageTo
            }
                return item;
            }).map(item => {
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
                        city={item.dealership.city}
                    />
                </div>
            })}
        </AllAutomobilesWrapper>
    );
}

export default AutomobileInStockComponent;