import React, {useEffect, useState} from 'react';
import AutomobileService from "../../service/AutomobileService";
import {AllAutomobilesWrapper} from "../../layouts/automobile/AutomobileLayout";
import {SpinnerWrapperGrid, SpinnerWrapperLayout} from "../../layouts/SpinnerWrapperLayout";
import AutomobileInfoCardsComponent from "./AutomobileInfoCardsComponent";
import {AutomobileSortTypes} from "./AutomobileSortTypes";

const SearchedAutomobilesComponent = (props) => {
    debugger;
    const [automobiles, setAutomobiles] = useState([]);
    const [priceFrom, setPriceFrom] = useState(props.filters.priceFrom);
    const [priceTo, setPriceTo] = useState(props.filters.priceTo);
    const [yearFrom, setYearFrom] = useState(props.filters.yearFrom);
    const [yearTo, setYearTo] = useState(props.filters.yearTo);
    const [mileageFrom, setMileageFrom] = useState(props.filters.mileageFrom);
    const [mileageTo, setMileageTo] = useState(props.filters.mileageTo);

    const handleSort = (event) => {
        if (event.target.value === "Зростаюча ціна") {
            return AutomobileService.getAll().then(result => setAutomobiles(filter(result.data).sort((a, b) => a.expectedSellingPrice > b.expectedSellingPrice ? 1 : -1)))
        }
        if (event.target.value === "Спадаюча ціна") {
            return AutomobileService.getAll().then(result => setAutomobiles(filter(result.data).sort((a, b) => a.expectedSellingPrice > b.expectedSellingPrice ? -1 : 1)))
        }
        if (event.target.value === "Марка") {
            return AutomobileService.getAll().then(result => setAutomobiles(filter(result.data).sort((a, b) => a.modelAndPackage.make.name > b.modelAndPackage.make.name ? -1 : 1)))
        }
        if (event.target.value === "Модель") {
            return AutomobileService.getAll().then(result => setAutomobiles(filter(result.data).sort((a, b) => a.modelAndPackage.model > b.modelAndPackage.model ? -1 : 1)))
        }
        if (event.target.value === "Зростаючий рік випуску") {
            return AutomobileService.getAll().then(result => setAutomobiles(filter(result.data).sort((a, b) => a.manufactureYear > b.manufactureYear ? 1 : -1)))
        }
        if (event.target.value === "Спадаючий рік випуску") {
            return AutomobileService.getAll().then(result => setAutomobiles(filter(result.data).sort((a, b) => a.manufactureYear > b.manufactureYear ? -1 : 1)))
        }
        if (event.target.value === "Зростаюча кубатура") {
            return AutomobileService.getAll().then(result => setAutomobiles(filter(result.data).sort((a, b) => a.engine.cubicCapacity > b.engine.cubicCapacity ? 1 : -1)))
        }
        if (event.target.value === "Спадаюча кубатура") {
            return AutomobileService.getAll().then(result => setAutomobiles(filter(result.data).sort((a, b) => a.engine.cubicCapacity > b.engine.cubicCapacity ? -1 : 1)))
        }
    }
    const filter = (automobiles) => {
        return automobiles.filter(item => {
            if (props.filters.availability === "Всі") {
                return item;
            }
            return item.availability === props.filters.availability;
        }).filter(item => {
            if (props.filters.vehicleType === "Всі") {
                return item;
            }
            return item.vehicleType.name === props.filters.vehicleType;
        }).filter(item => {
            if (props.filters.make === "Всі") {
                return item;
            }
            return item.modelAndPackage.make.name === props.filters.make;
        }).filter(item => {
            if (props.filters.model === "Всі") {
                return item;
            }
            return item.modelAndPackage.model === props.filters.model;
        }).filter(item => {
            if (props.filters.exteriorColor === "Всі") {
                return item;
            }
            return item.exteriorColor.name === props.filters.exteriorColor;
        }).filter(item => {
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
        }).filter(item => {
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
        }).filter(item => {
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
        }).filter(item => {
            if (props.filters.fuelType === "Всі") {
                return item;
            }
            return item.engine.fuelType === props.filters.fuelType;
        }).filter(item => {
            if (props.filters.transmissionType === "Всі") {
                return item;
            }
            return item.engine.transmissionType === props.filters.transmissionType;
        }).filter(item => {
            if (props.filters.cubicCapacityFrom.length > 0 && props.filters.cubicCapacityTo.length > 0 && parseInt(props.filters.cubicCapacityTo) > parseInt(props.filters.cubicCapacityFrom)) {
                return item.engine.cubicCapacity >= props.filters.cubicCapacityFrom && item.engine.cubicCapacity <= props.filters.cubicCapacityTo
            }
            if (props.filters.cubicCapacityFrom.length > 0) {
                return item.engine.cubicCapacity >= props.filters.cubicCapacityFrom
            }
            if (props.filters.cubicCapacityTo.length > 0) {
                return item.engine.cubicCapacity <= props.filters.cubicCapacityTo
            }
            return item;
        }).filter(item => {
            if (props.filters.powerFrom.length > 0 && props.filters.powerTo.length > 0 && parseInt(props.filters.powerTo) > parseInt(props.filters.powerFrom)) {
                return props.filters.searchPowerType === "kW" ?
                    item.engine.powerKW >= props.filters.powerFrom && item.engine.powerKW <= props.filters.powerTo :
                    item.engine.powerPS >= props.filters.powerFrom && item.engine.powerPS <= props.filters.powerTo
            }
            if (props.filters.powerFrom.length > 0) {
                return props.filters.searchPowerType === "kW" ? item.engine.powerKW >= props.filters.powerFrom : item.engine.powerPS >= props.filters.powerFrom
            }
            if (props.filters.powerTo.length > 0) {
                return props.filters.searchPowerType === "kW" ? item.engine.powerKW <= props.filters.powerTo : item.engine.powerPS
            }
            return item;
        }).filter(item => {
            if (props.filters.tyresAndWheels.filter(item => item.isChosen).length === 0) {
                return item
            }
            return item.tyresAndWheels
                .filter(toCheck => props.filters.tyresAndWheels.filter(item => item.isChosen)
                    .map(item => item.value).includes(toCheck)).length === props.filters.tyresAndWheels.filter(item => item.isChosen).length
        }).filter(item => {
            if (props.filters.interiorFeatures.filter(item => item.isChosen).length === 0) {
                return item
            }
            return item.interiorFeatures
                .filter(toCheck => props.filters.interiorFeatures.filter(item => item.isChosen)
                    .map(item => item.value).includes(toCheck)).length === props.filters.interiorFeatures.filter(item => item.isChosen).length
        }).filter(item => {
            if (props.filters.securities.filter(item => item.isChosen).length === 0) {
                return item
            }
            return item.securities
                .filter(toCheck => props.filters.securities.filter(item => item.isChosen)
                    .map(item => item.value).includes(toCheck)).length === props.filters.securities.filter(item => item.isChosen).length
        }).filter(item => {
            if (props.filters.parkingSensors.filter(item => item.isChosen).length === 0) {
                return item
            }
            return item.parkingSensors
                .filter(toCheck => props.filters.parkingSensors.filter(item => item.isChosen)
                    .map(item => item.value).includes(toCheck)).length === props.filters.parkingSensors.filter(item => item.isChosen).length
        }).filter(item => {
            if (props.filters.extras.filter(item => item.isChosen).length === 0) {
                return item
            }
            return item.extras
                .filter(toCheck => props.filters.extras.filter(item => item.isChosen)
                    .map(item => item.value).includes(toCheck)).length === props.filters.extras.filter(item => item.isChosen).length
        }).filter(item => {
            if (props.filters.dealership === "Всі") {
                return item;
            }
            return item.dealership.city === props.filters.dealership;
        })
    }

    useEffect(() => {
            AutomobileService.getAll().then(result => setAutomobiles(filter(result.data).sort((a, b) => a.expectedSellingPrice > b.expectedSellingPrice ? 1 : -1)))

    }, [])

    // if (automobiles.length === 0) {
    //     return (
    //         <SpinnerWrapperGrid>
    //             <SpinnerWrapperLayout>
    //                 <h1>Автомобілів з заданими характеристиками не знайдено</h1>
    //             </SpinnerWrapperLayout>
    //         </SpinnerWrapperGrid>
    //     )
    // }

    return (
        <AllAutomobilesWrapper>
            <div style={{color: "white"}}>
                <h3>Кількість автомобілів: {filter(automobiles).length}</h3>
                <select
                    style={{margin: "5px"}}
                    onChange={(event) => handleSort(event)}
                >
                    {AutomobileSortTypes.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select> <br/>
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
            {filter(automobiles).map(item => {
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

export default SearchedAutomobilesComponent;