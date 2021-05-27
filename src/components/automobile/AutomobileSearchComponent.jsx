import React, {useEffect, useState} from 'react';
import {
    AutomobileAddWrapper,
    AutomobileInfo, SearchButton,
} from "../../layouts/automobile/AutomobileLayout";
import {Button, Card, CardDeck} from "react-bootstrap";
import AutomobileService from "../../service/AutomobileService";
import {useHistory} from "react-router-dom";
import {TyresAndWheelsOptions} from "./automobileAddCheckboxOptions/TyresAndWheelsOptions";
import {InteriorFeaturesOptions} from "./automobileAddCheckboxOptions/InteriorFeaturesOptions";
import {SecurityOptions} from "./automobileAddCheckboxOptions/SecurityOptions";
import {ParkingSensorsOptions} from "./automobileAddCheckboxOptions/ParkingSensorsOptions";
import {ExtrasOptions} from "./automobileAddCheckboxOptions/ExtrasOptions";
import {EmployeeSelectDealership} from "../../layouts/employee/EmployeeLayout";

const AutomobileSearchComponent = (props) => {
    const history = useHistory();
    const [automobiles, setAutomobiles] = useState([]);
    const [availability, setAvailability] = useState("Всі")

    const [dealershipOption, setDealershipOption] = useState([]);
    const [dealership, setDealership] = useState("Всі")

    const [vehicleTypeOptions, setVehicleTypeOptions] = useState([]);
    const [vehicleType, setVehicleType] = useState("Всі");
    const handleVehicleTypeChange = (event) => {
        setVehicleType(event.target.value);
        setMake("Всі")
        setModel("Всі")
        AutomobileService.getAll().then(result => setMakeOptions([...new Set(result.data.filter(item => availability === "Всі" ? item : item.availability === availability)
            .filter(item => item.vehicleType.name === event.target.value)
            .map(item => item.modelAndPackage.make.name))]))
    }

    const [modelOptions, setModelOptions] = useState([]);
    const [model, setModel] = useState("Всі");
    const handleModelChange = (event) => {
        setModel(event.target.value);
    }


    const [makeOptions, setMakeOptions] = useState([]);
    const [make, setMake] = useState("Всі");
    const handleMakeChange = (event) => {
        setMake(event.target.value);
        setModel("Всі");
        AutomobileService.getAll().then(result => setModelOptions(result.data.filter(item => availability === "Всі" ? item : item.availability === availability)
            .filter(item => vehicleType === "Всі" ? item : item.vehicleType.name === vehicleType)
            .map(item => item.modelAndPackage)))
    }

    const [exteriorColorOptions, setExteriorColorOptions] = useState([]);
    const [exteriorColor, setExteriorColor] = useState("Всі");

    const [yearFrom, setYearFrom] = useState("");
    const [yearTo, setYearTo] = useState("");

    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");

    const [mileageFrom, setMileageFrom] = useState("");
    const [mileageTo, setMileageTo] = useState("");

    const [fuelType, setFuelType] = useState("Всі");
    const [transmissionType, setTransmissionType] = useState("Всі");
    const [cubicCapacityFrom, setCubicCapacityFrom] = useState("")
    const [cubicCapacityTo, setCubicCapacityTo] = useState("")

    const [searchPowerType, setSearchPowerType] = useState("kW")
    const [powerFrom, setPowerFrom] = useState("")
    const [powerTo, setPowerTo] = useState("")

    const [tyresAndWheels, setTyresAndWheels] = useState(TyresAndWheelsOptions);
    const toggleTyresAndWheels = index => {
        const newData = [...tyresAndWheels];
        newData.splice(index, 1, {
            value: tyresAndWheels[index].value,
            isChosen: !tyresAndWheels[index].isChosen
        });
        setTyresAndWheels(newData);
    };

    const [interiorFeatures, setInteriorFeatures] = useState(InteriorFeaturesOptions);
    const toggleInteriorFeatures = index => {
        const newData = [...interiorFeatures];
        newData.splice(index, 1, {
            value: interiorFeatures[index].value,
            isChosen: !interiorFeatures[index].isChosen
        });
        setInteriorFeatures(newData);
    };

    const [securities, setSecurities] = useState(SecurityOptions)
    const toggleSecurity = index => {
        const newData = [...securities];
        newData.splice(index, 1, {
            value: securities[index].value,
            isChosen: !securities[index].isChosen
        });
        setSecurities(newData);
    };

    const [parkingSensors, setParkingSensors] = useState(ParkingSensorsOptions)
    const toggleParkingSensors = index => {
        const newData = [...parkingSensors];
        newData.splice(index, 1, {
            value: parkingSensors[index].value,
            isChosen: !parkingSensors[index].isChosen
        });
        setParkingSensors(newData);
    };

    const toggleExtras = index => {
        const newData = [...extras];
        newData.splice(index, 1, {
            value: extras[index].value,
            isChosen: !extras[index].isChosen
        });
        setExtras(newData);
    };
    const [extras, setExtras] = useState(ExtrasOptions)

    useEffect(() => {
        AutomobileService.getAll().then(result => {
            setAutomobiles(result.data.filter(item => availability === "Всі" ? item : item.availability === availability))
            setMakeOptions([...new Set(result.data.filter(item => availability === "Всі" ? item : item.availability === availability).map(item => item.modelAndPackage.make.name))])
            setVehicleTypeOptions([...new Set(result.data.filter(item => availability === "Всі" ? item : item.availability === availability).map(item => item.vehicleType.name))])
            setModelOptions(result.data.filter(item => availability === "Всі" ? item : item.availability === availability).map(item => item.modelAndPackage))
            setExteriorColorOptions([...new Set(result.data.filter(item => availability === "Всі" ? item : item.availability === availability).map(item => item.exteriorColor.name))])
            setDealershipOption([...new Set(result.data.filter(item => availability === "Всі" ? item : item.availability === availability).map(item => item.dealership.city))])
        })
        setVehicleType("Всі")
        setMake("Всі")
        setModel("Всі");

    }, [availability])

    const filter = (automobiles) => {
        return automobiles.filter(item => {
            if (availability === "Всі") {
                return item;
            }
            return item.availability === availability;
        }).filter(item => {
            if (vehicleType === "Всі") {
                return item;
            }
            return item.vehicleType.name === vehicleType;
        }).filter(item => {
            if (make === "Всі") {
                return item;
            }
            return item.modelAndPackage.make.name === make;
        }).filter(item => {
            if (model === "Всі") {
                return item;
            }
            return item.modelAndPackage.model === model;
        }).filter(item => {
            if (exteriorColor === "Всі") {
                return item;
            }
            return item.exteriorColor.name === exteriorColor;
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
            if (fuelType === "Всі") {
                return item;
            }
            return item.engine.fuelType === fuelType;
        }).filter(item => {
            if (transmissionType === "Всі") {
                return item;
            }
            return item.engine.transmissionType === transmissionType;
        }).filter(item => {
            if (cubicCapacityFrom.length > 0 && cubicCapacityTo.length > 0 && parseInt(cubicCapacityTo) > parseInt(cubicCapacityFrom)) {
                return item.engine.cubicCapacity >= cubicCapacityFrom && item.engine.cubicCapacity <= cubicCapacityTo
            }
            if (cubicCapacityFrom.length > 0) {
                return item.engine.cubicCapacity >= cubicCapacityFrom
            }
            if (cubicCapacityTo.length > 0) {
                return item.engine.cubicCapacity <= cubicCapacityTo
            }
            return item;
        }).filter(item => {
            if (powerFrom.length > 0 && powerTo.length > 0 && parseInt(powerTo) > parseInt(powerFrom)) {
                return searchPowerType === "kW" ?
                    item.engine.powerKW >= powerFrom && item.engine.powerKW <= powerTo :
                    item.engine.powerPS >= powerFrom && item.engine.powerPS <= powerTo
            }
            if (powerFrom.length > 0) {
                return searchPowerType === "kW" ? item.engine.powerKW >= powerFrom : item.engine.powerPS >= powerFrom
            }
            if (powerTo.length > 0) {
                return searchPowerType === "kW" ? item.engine.powerKW <= powerTo : item.engine.powerPS
            }
            return item;
        }).filter(item => {
            if (tyresAndWheels.filter(item => item.isChosen).length === 0) {
                return item
            }
            return item.tyresAndWheels
                .filter(toCheck => tyresAndWheels.filter(item => item.isChosen)
                    .map(item => item.value).includes(toCheck)).length === tyresAndWheels.filter(item => item.isChosen).length
        }).filter(item => {
            if (interiorFeatures.filter(item => item.isChosen).length === 0) {
                return item
            }
            return item.interiorFeatures
                .filter(toCheck => interiorFeatures.filter(item => item.isChosen)
                    .map(item => item.value).includes(toCheck)).length === interiorFeatures.filter(item => item.isChosen).length
        }).filter(item => {
            if (securities.filter(item => item.isChosen).length === 0) {
                return item
            }
            return item.securities
                .filter(toCheck => securities.filter(item => item.isChosen)
                    .map(item => item.value).includes(toCheck)).length === securities.filter(item => item.isChosen).length
        }).filter(item => {
            if (parkingSensors.filter(item => item.isChosen).length === 0) {
                return item
            }
            return item.parkingSensors
                .filter(toCheck => parkingSensors.filter(item => item.isChosen)
                    .map(item => item.value).includes(toCheck)).length === parkingSensors.filter(item => item.isChosen).length
        }).filter(item => {
            if (extras.filter(item => item.isChosen).length === 0) {
                return item
            }
            return item.extras
                .filter(toCheck => extras.filter(item => item.isChosen)
                    .map(item => item.value).includes(toCheck)).length === extras.filter(item => item.isChosen).length
        }).filter(item => {
            if (dealership === "Всі") {
                return item;
            }
            return item.dealership.city === dealership;
        })
    }

    const handleSearch = (event) => {
        event.preventDefault();
        // props.setAutomobiles(filter(automobiles));
        props.setFilters({
            availability: availability,
            vehicleType: vehicleType,
            model: model,
            make: make,
            exteriorColor: exteriorColor,
            yearFrom: yearFrom,
            yearTo: yearTo,
            priceFrom: priceFrom,
            priceTo: priceTo,
            mileageFrom: mileageFrom,
            mileageTo: mileageTo,
            fuelType: fuelType,
            transmissionType: transmissionType,
            cubicCapacityFrom: cubicCapacityFrom,
            cubicCapacityTo: cubicCapacityTo,
            searchPowerType: searchPowerType,
            powerFrom: powerFrom,
            powerTo: powerTo,
            tyresAndWheels: tyresAndWheels,
            interiorFeatures: interiorFeatures,
            securities: securities,
            parkingSensors: parkingSensors,
            extras: extras,
            dealership: dealership
        })
        history.push("/automobile/foundAutomobiles");
    }

    return (
        <AutomobileAddWrapper>
            <form>
                <CardDeck>
                    <div>
                        <Card.Header>
                            <h4>Пошук</h4>
                        </Card.Header>
                        <Card>
                            <Card.Body>
                                <Card.Title>Наявність автомобіля: </Card.Title>
                                <Card.Text>
                                    <select
                                        className="form-control"
                                        value={availability}
                                        onChange={event => setAvailability(event.target.value)}
                                    >
                                        <option value="Всі">Всі</option>
                                        <option value="Замовлений">Замовлений</option>
                                        <option value="Проданий">Проданий</option>
                                        <option value="В наявності">В наявності</option>
                                    </select>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Основні характеристики: </Card.Title>
                                <Card.Text>
                                    <AutomobileInfo>
                                        <div>
                                            <label>Тип кузова
                                                <select
                                                    className="form-control"
                                                    value={vehicleType}
                                                    onChange={event => handleVehicleTypeChange(event)}
                                                >
                                                    <option value="Всі">Всі</option>
                                                    {vehicleTypeOptions.map(item => {
                                                        return <option key={item} value={item}>{item}</option>
                                                    })}
                                                </select>
                                            </label><br/>
                                            <label>Марка
                                                <select
                                                    className="form-control"
                                                    style={{width: "217px"}}
                                                    value={make}
                                                    onChange={event => handleMakeChange(event)}
                                                >
                                                    <option value="Всі">Всі</option>
                                                    {makeOptions.map(item => {
                                                        return <option key={item} value={item}>{item}</option>
                                                    })}
                                                </select>
                                            </label><br/>
                                            <label>Модель
                                                <select
                                                    value={model}
                                                    style={{width: "217px"}}
                                                    className="form-control"
                                                    onChange={(event) =>
                                                        handleModelChange(event)}
                                                >
                                                    <option value="Всі">Всі</option>
                                                    {[...new Set(modelOptions.filter(item => item.make.name === make).map(item => item.model))]
                                                        .map(item => {
                                                            return <option key={item} value={item}>{item}</option>
                                                        })
                                                    }
                                                </select>
                                            </label><br/>
                                            <label>Колір автомобіля
                                                <select
                                                    style={{width: "217px"}}
                                                    value={exteriorColor}
                                                    className="form-control"
                                                    onChange={(event) =>
                                                        setExteriorColor(event.target.value)}
                                                >
                                                    <option value="Всі">Всі</option>
                                                    {exteriorColorOptions.map(item => {
                                                        return <option key={item} value={item}>{item}</option>
                                                    })
                                                    }
                                                </select>
                                            </label>
                                        </div>
                                        <div>
                                            <label>Ціна від:
                                                <input className="form-control"

                                                       style={{margin: "5px"}}
                                                       type="text"
                                                       value={priceFrom}
                                                       onChange={event => setPriceFrom(event.target.value)}
                                                />
                                            </label>
                                            <label>Ціна до:
                                                <input className="form-control"
                                                       style={{margin: "5px"}}
                                                       type="text"
                                                       value={priceTo}
                                                       onChange={event => setPriceTo(event.target.value)}
                                                />
                                            </label><br/>
                                            <label>Рік випуску від:
                                                <input className="form-control"
                                                       style={{margin: "5px"}}
                                                       type="text"
                                                       value={yearFrom}
                                                       onChange={event => setYearFrom(event.target.value)}
                                                />
                                            </label>
                                            <label>Рік випуску до:
                                                <input className="form-control"
                                                       style={{margin: "5px"}}
                                                       type="text"
                                                       value={yearTo}
                                                       onChange={event => setYearTo(event.target.value)}
                                                />
                                            </label><br/>
                                            <label>Пробіг від:
                                                <input className="form-control"
                                                       style={{margin: "5px"}}
                                                       type="text"
                                                       value={mileageFrom}
                                                       onChange={event => setMileageFrom(event.target.value)}
                                                />
                                            </label>
                                            <label>Пробіг до:
                                                <input className="form-control"
                                                       style={{margin: "5px"}}
                                                       type="text"
                                                       value={mileageTo}
                                                       onChange={event => setMileageTo(event.target.value)}
                                                />
                                            </label>
                                        </div>
                                        <div>
                                            <label>Тип палива
                                                <select
                                                    name="fuelType"
                                                    value={fuelType}
                                                    className="form-control"
                                                    onChange={(event) =>
                                                        setFuelType(event.target.value)}
                                                >
                                                    <option>Всі</option>
                                                    <option>Бензин</option>
                                                    <option>Дизель</option>
                                                    <option>Електроенергія</option>
                                                    <option>Гібрид (бензин-електроенергія)</option>
                                                    <option>Гібрид (дизель-електроенергія)</option>
                                                    <option>Гібрид (газ-бензин)</option>
                                                </select>
                                            </label>
                                            <label>Коробка передач
                                                <select
                                                    style={{width: "207px"}}
                                                    name="transmissionType"
                                                    className="form-control"
                                                    value={transmissionType}
                                                    onChange={(event) =>
                                                        setTransmissionType(event.target.value)}
                                                >
                                                    <option>Всі</option>
                                                    <option>Механіка</option>
                                                    <option>Автомат</option>
                                                    <option>Напівавтомат</option>
                                                </select>
                                            </label><br/>
                                            <label>Кубатура від:
                                                <input className="form-control"
                                                       style={{margin: "5px"}}
                                                       type="text"
                                                       value={cubicCapacityFrom}
                                                       onChange={event => setCubicCapacityFrom(event.target.value)}
                                                />
                                            </label>
                                            <label>Кубатура до:
                                                <input className="form-control"
                                                       style={{margin: "5px"}}
                                                       type="text"
                                                       value={cubicCapacityTo}
                                                       onChange={event => setCubicCapacityTo(event.target.value)}
                                                />
                                            </label><br/>
                                            <label>Потужність від:
                                                <input className="form-control"
                                                       style={{margin: "5px"}}
                                                       type="text"
                                                       value={powerFrom}
                                                       onChange={event => setPowerFrom(event.target.value)}
                                                />
                                                <select
                                                    style={{marginLeft: "5px"}}
                                                    value={searchPowerType}
                                                    onChange={event => setSearchPowerType(event.target.value)}
                                                >
                                                    <option value="kW">kW</option>
                                                    <option value="PS">PS</option>
                                                </select>
                                            </label>
                                            <label>Потужність до:
                                                <input className="form-control"
                                                       style={{margin: "5px"}}
                                                       type="text"
                                                       value={powerTo}
                                                       onChange={event => setPowerTo(event.target.value)}
                                                />
                                                <select
                                                    style={{marginLeft: "5px"}}
                                                    value={searchPowerType}
                                                    onChange={event => setSearchPowerType(event.target.value)}
                                                >
                                                    <option value="kW">kW</option>
                                                    <option value="PS">PS</option>
                                                </select>
                                            </label>
                                        </div>
                                    </AutomobileInfo>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Тип коліс</Card.Title>
                                <Card.Text>
                                    <AutomobileInfo>
                                        <p style={{gridColumnStart: "1", gridColumnEnd: "3"}}>Виберіть наявний комплект
                                            коліс:</p>
                                        <br/>
                                        {tyresAndWheels.map((item, index) => (
                                            <label key={item.value} style={{margin: "2px"}}>
                                                <input
                                                    readOnly
                                                    type="checkbox"
                                                    checked={item.isChosen || false}
                                                    onClick={() => toggleTyresAndWheels(index)}
                                                />
                                                {item.value}
                                            </label>
                                        ))}
                                    </AutomobileInfo>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Засоби допомоги паркування</Card.Title>
                                <Card.Text>
                                    <AutomobileInfo>
                                        {parkingSensors.map((item, index) => (
                                            <label key={item.value} style={{margin: "2px"}}>
                                                <input
                                                    readOnly
                                                    type="checkbox"
                                                    checked={item.isChosen || false}
                                                    onClick={() => toggleParkingSensors(index)}
                                                />
                                                {item.value}
                                            </label>
                                        ))}
                                    </AutomobileInfo>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Засоби безпеки</Card.Title>
                                <Card.Text>
                                    <AutomobileInfo>
                                        {securities.map((item, index) => (
                                            <label key={item.value} style={{margin: "2px"}}>
                                                <input
                                                    readOnly
                                                    type="checkbox"
                                                    checked={item.isChosen || false}
                                                    onClick={() => toggleSecurity(index)}
                                                />
                                                {item.value}
                                            </label>
                                        ))}
                                    </AutomobileInfo>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Зручності салону</Card.Title>
                                <Card.Text>
                                    <AutomobileInfo>
                                        {interiorFeatures.map((item, index) => (
                                            <label key={item.value} style={{margin: "2px"}}>
                                                <input
                                                    readOnly
                                                    type="checkbox"
                                                    checked={item.isChosen || false}
                                                    onClick={() => toggleInteriorFeatures(index)}
                                                />
                                                {item.value}
                                            </label>
                                        ))}
                                    </AutomobileInfo>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Додаткові компоненти</Card.Title>
                                <Card.Text>
                                    <AutomobileInfo>
                                        {extras.map((item, index) => (
                                            <label key={item.value} style={{margin: "2px"}}>
                                                <input
                                                    readOnly
                                                    type="checkbox"
                                                    checked={item.isChosen || false}
                                                    onClick={() => toggleExtras(index)}
                                                />
                                                {item.value}
                                            </label>
                                        ))}
                                    </AutomobileInfo>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="p-3">
                            <Card.Title>Автосалон</Card.Title>
                            <Card.Text style={{paddingBottom: "12px"}}>
                                <EmployeeSelectDealership required="true"
                                                          onChange={(event) => {
                                                             setDealership(dealershipOption.find(item => item === event.target.value))
                                                          }}
                                >
                                    <option>
                                        Всі
                                    </option>
                                    {dealershipOption.map(item =>
                                        <option key={item} value={item}>{item}</option>
                                    )}
                                </EmployeeSelectDealership>
                            </Card.Text>
                        </Card>
                    </div>
                    <SearchButton>
                        <Button className="m-3"
                                variant="success"
                                onClick={(event) => handleSearch(event)}
                        >
                            Знайдено автомобілів: {filter(automobiles).length} <br/>
                            Пошук
                        </Button>
                    </SearchButton>
                </CardDeck>
            </form>
        </AutomobileAddWrapper>
    );
}

export default AutomobileSearchComponent;
