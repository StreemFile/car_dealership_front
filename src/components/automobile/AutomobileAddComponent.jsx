import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {AutomobileAddWrapper, AutomobileInfo} from "../../layouts/automobile/AutomobileLayout";
import {Button, Card, CardDeck} from "react-bootstrap";
import VehicleTypeService from "../../service/VehicleTypeService";
import MakeService from "../../service/MakeService";
import ModelAndPackageService from "../../service/ModelAndPackageService";
import ProducingCountryService from "../../service/ProducingCountryService";
import InteriorColorService from "../../service/InteriorColorService";
import ExteriorColorService from "../../service/ExteriorColorService";
import AutomobileService from "../../service/AutomobileService";
import {TyresAndWheelsOptions} from "./automobileAddCheckboxOptions/TyresAndWheelsOptions";
import {InteriorFeaturesOptions} from "./automobileAddCheckboxOptions/InteriorFeaturesOptions";
import {ExtrasOptions} from "./automobileAddCheckboxOptions/ExtrasOptions";
import {ParkingSensorsOptions} from "./automobileAddCheckboxOptions/ParkingSensorsOptions";
import {SecurityOptions} from "./automobileAddCheckboxOptions/SecurityOptions";
import DealershipService from "../../service/DealershipService";
import {EmployeeSelectDealership} from "../../layouts/employee/EmployeeLayout";
import moment from "moment";
import AutomobileInOrderService from "../../service/AutomobileInOrderService";
import {NavLink} from "react-router-dom";

const AutomobileAddComponent = (props) => {
    const [vehicleTypeOptions, setVehicleTypeOptions] = useState([]);
    const [vehicleType, setVehicleType] = useState("");
    const doesVehicleTypeExist = () => {
        return vehicleTypeOptions.map(item => item.name).includes(vehicleType);
    }

    const [pack, setPack] = useState("");
    const [isPackDisabled, setIsPackDisabled] = useState(true);

    const [modelOptions, setModelOptions] = useState([]);
    const [model, setModel] = useState("");
    const [isModelDisabled, setIsModelDisabled] = useState(true);
    const handleModelChange = (event) => {
        setModel(event.target.value);
        setPack("");
        if (event.target.value.length > 0) {
            setIsPackDisabled(false);
        } else {
            setIsPackDisabled(true);
        }
    }
    const doesModelExist = () => {
        return modelOptions.filter(item => item.make.name === make
            && item.model === model
            && item.pack === pack).length > 0;
    }

    const [makeOptions, setMakeOptions] = useState([]);
    const [make, setMake] = useState("");
    const handleMakeChange = (event) => {
        setMake(event.target.value);
        setModel("");
        setPack("");
        if (event.target.value.length > 0) {
            setIsModelDisabled(false);
        } else {
            setIsModelDisabled(true);
        }
    }
    const doesMakeExist = () => {
        return makeOptions.map(item => item.name).includes(make);
    }

    const [exportedFromOptions, setExportedFromOptions] = useState([])
    const [exportedFrom, setExportedFrom] = useState("")
    const doesExportedFromExist = () => {
        return exportedFromOptions.map(item => item.name).includes(exportedFrom);
    }

    const [manufactureYear, setManufactureYear] = useState("");

    const [mileage, setMileage] = useState("");

    const [interiorColorOptions, setInteriorColorOptions] = useState([]);
    const [interiorColor, setInteriorColor] = useState("");
    const doesInteriorColorExist = () => {
        return interiorColorOptions.map(item => item.name).includes(interiorColor);
    }

    const [exteriorColorOptions, setExteriorColorOptions] = useState([]);
    const [exteriorColor, setExteriorColor] = useState("");
    const doesExteriorColorExist = () => {
        return exteriorColorOptions.map(item => item.name).includes(exteriorColor);
    }

    const [interiorMaterial, setInteriorMaterial] = useState("");
    const [interiorFeatures, setInteriorFeatures] = useState(InteriorFeaturesOptions);

    const [numberOfSeats, setNumberOfSeats] = useState("");
    const [numberOfDoors, setNumberOfDoors] = useState("");

    const [fuelType, setFuelType] = useState("");
    const [transmissionType, setTransmissionType] = useState("");

    const [cubicCapacity, setCubicCapacity] = useState("")
    const [powerKW, setPowerKW] = useState("");
    const [powerPS, setPowerPS] = useState("");

    const [drive, setDrive] = useState("");

    const [vin, setVin] = useState("");

    const [headlightsType, setHeadlightsType] = useState("");

    const [tyresAndWheels, setTyresAndWheels] = useState(TyresAndWheelsOptions);

    const getVehicleTypeToSet = () => {
        let vehicleTypeToSet;
        if (doesVehicleTypeExist()) {
            vehicleTypeToSet = vehicleTypeOptions.find(item => item.name === vehicleType)
        } else {
            vehicleTypeToSet = {
                id: uuidv4().toString(),
                name: vehicleType,
                description: "",
                created_at: new Date().toISOString(),
                modified_at: new Date().toISOString()

            };
            VehicleTypeService.create(vehicleTypeToSet);
        }
        return vehicleTypeToSet;
    }

    const getExportedFromToSet = () => {
        let exportedFromToSet;
        if (doesExportedFromExist()) {
            exportedFromToSet = exportedFromOptions.find(item => item.name === exportedFrom)
        } else {
            exportedFromToSet = {
                id: uuidv4().toString(),
                name: exportedFrom,
                description: "",
                created_at: new Date().toISOString(),
                modified_at: new Date().toISOString()
            };
            ProducingCountryService.create(exportedFromToSet);
        }
        return exportedFromToSet;
    }

    const getModelToSet = () => {
        let modelToSet;
        if (doesModelExist()) {
            modelToSet = modelOptions.find(item => item.make.name === make
                && item.model === model
                && item.pack === pack)
        } else {
            if (doesMakeExist()) {
                modelToSet = {
                    id: uuidv4().toString(),
                    make: makeOptions.find(item => item.name === make),
                    model: model,
                    pack: pack,
                    description: "",
                    created_at: new Date().toISOString(),
                    modified_at: new Date().toISOString()
                }
                ModelAndPackageService.create(modelToSet)
            } else {
                let makeToSet = {
                    id: uuidv4().toString(),
                    name: make,
                    description: "",
                    created_at: new Date().toISOString(),
                    modified_at: new Date().toISOString()
                }
                modelToSet = {
                    id: uuidv4().toString(),
                    make: makeToSet,
                    model: model,
                    pack: pack,
                    description: "",
                    created_at: new Date().toISOString(),
                    modified_at: new Date().toISOString()
                }
                MakeService.create(makeToSet);
                ModelAndPackageService.create(modelToSet)
            }
        }
        return modelToSet;
    }

    const getExteriorColorToSet = () => {
        let exteriorColorToSet;
        if (doesExteriorColorExist()) {
            exteriorColorToSet = exteriorColorOptions.find(item => item.name === exteriorColor)
        } else {
            exteriorColorToSet = {
                id: uuidv4().toString(),
                name: exteriorColor,
                description: "",
                created_at: new Date().toISOString(),
                modified_at: new Date().toISOString()
            };
            ExteriorColorService.create(exteriorColorToSet);
        }
        return exteriorColorToSet;
    }

    const getInteriorColorToSet = () => {
        let interiorColorToSet;
        if (doesInteriorColorExist()) {
            interiorColorToSet = interiorColorOptions.find(item => item.name === interiorColor)
        } else {
            interiorColorToSet = {
                id: uuidv4().toString(),
                name: interiorColor,
                description: "",
                created_at: new Date().toISOString(),
                modified_at: new Date().toISOString()
            };
            InteriorColorService.create(interiorColorToSet);
        }
        return interiorColorToSet;
    }

    const [extras, setExtras] = useState(ExtrasOptions)
    const [parkingSensors, setParkingSensors] = useState(ParkingSensorsOptions)
    const [securities, setSecurities] = useState(SecurityOptions)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [dealership, setDealership] = useState("");
    const [dealershipOption, setDealershipOption] = useState([]);

    const [isAvailable, setIsAvailable] = useState(false)
    const [expectedArrivalDate, setExpectedArrivalDate] = useState({});

    const [actualPrice, setActualPrice] = useState("");
    const [expectedSellingPrice, setExpectedSellingPrice] = useState("");

    const add = (event) => {
        event.preventDefault();

        let newAutomobile = {
            id: uuidv4().toString(),
            vehicleType: getVehicleTypeToSet(),
            exportedFrom: getExportedFromToSet(),
            modelAndPackage: getModelToSet(),
            drive: drive,
            engine: {
                fuelType: fuelType,
                transmissionType: transmissionType,
                cubicCapacity: cubicCapacity,
                powerPS: powerPS,
                powerKW: powerKW,
                description: ""
            },
            exteriorColor: getExteriorColorToSet(),
            parkingSensors: parkingSensors.filter(item => item.isChosen).map(item => item.value),
            securities: securities.filter(item => item.isChosen).map(item => item.value),
            headlightsType: headlightsType,
            tyresAndWheels: tyresAndWheels.filter(item => item.isChosen).map(item => item.value),
            numberOfDoors: numberOfDoors,
            interiorColor: getInteriorColorToSet(),
            interiorMaterial: interiorMaterial,
            interiorFeatures: interiorFeatures.filter(item => item.isChosen).map(item => item.value),
            numberOfSeats: numberOfSeats,
            extras: extras.filter(item => item.isChosen).map(item => item.value),
            mileage: mileage,
            manufactureYear: manufactureYear,
            vin: vin,
            availability: isAvailable ? "?? ??????????????????" : "????????????????????",
            actualPrice: actualPrice,
            expectedSellingPrice: expectedSellingPrice,
            dealership: dealership,
            title: title,
            description: description,
            created_at: new Date().toISOString(),
            modified_at: new Date().toISOString()
        }
        AutomobileService.create(newAutomobile);
        if (!isAvailable) {
            let automobileInOrder = {
                id: uuidv4().toString(),
                description: description,
                automobile: newAutomobile,
                expectedArrivalDate: expectedArrivalDate,
                created_at: new Date().toISOString(),
                modified_at: new Date().toISOString()
            }
            AutomobileInOrderService.create(automobileInOrder)
        }
    }
    useEffect(() => {
        if (vehicleTypeOptions.length === 0) {
            VehicleTypeService.getAll().then(result => setVehicleTypeOptions(result.data));
        }
        if (makeOptions.length === 0) {
            MakeService.getAll().then(result => setMakeOptions(result.data));
        }
        if (modelOptions.length === 0) {
            ModelAndPackageService.getAll().then(result => setModelOptions(result.data));
        }
        if (exportedFromOptions.length === 0) {
            ProducingCountryService.getAll().then(result => setExportedFromOptions(result.data));
        }
        if (interiorColorOptions.length === 0) {
            InteriorColorService.getAll().then(result => setInteriorColorOptions(result.data));
        }
        if (exteriorColorOptions.length === 0) {
            ExteriorColorService.getAll().then(result => setExteriorColorOptions(result.data));
        }
        if (dealershipOption.length === 0) {
            DealershipService.getAll().then(result => setDealershipOption(result.data));
        }
    }, [makeOptions, vehicleTypeOptions])

    const toggleTyresAndWheels = index => {
        const newData = [...tyresAndWheels];
        newData.splice(index, 1, {
            value: tyresAndWheels[index].value,
            isChosen: !tyresAndWheels[index].isChosen
        });
        setTyresAndWheels(newData);
    };
    const toggleInteriorFeatures = index => {
        const newData = [...interiorFeatures];
        newData.splice(index, 1, {
            value: interiorFeatures[index].value,
            isChosen: !interiorFeatures[index].isChosen
        });
        setInteriorFeatures(newData);
    };
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

    const toggleSecurity = index => {
        const newData = [...securities];
        newData.splice(index, 1, {
            value: securities[index].value,
            isChosen: !securities[index].isChosen
        });
        setSecurities(newData);
    };

    return (
        <AutomobileAddWrapper>
            <form autoComplete="off">
                <CardDeck>
                    <Card.Header>
                        <h4>?????????? ????????????????????</h4>
                    </Card.Header>
                    <Card>
                        <Card.Body>
                            <Card.Title>?????????????? ????????????????????????????: </Card.Title>
                            <Card.Text>
                                <AutomobileInfo>
                                    <div>
                                        <label>?????? ????????????
                                            <input
                                                type="text"
                                                value={vehicleType}
                                                list="vehicleTypeList"
                                                name="vehicleTypeList"
                                                className="form-control "
                                                style={{width: "100%"}}
                                                onChange={(event) =>
                                                    setVehicleType(event.target.value)}
                                            />
                                            <datalist id="vehicleTypeList">
                                                {vehicleTypeOptions.map(item => {
                                                    return <option key={item.id} value={item.name}/>
                                                })}
                                            </datalist>
                                        </label>
                                        <label>??????????
                                            <input
                                                list="makes"
                                                name="makes"
                                                value={make}
                                                onChange={(event) => handleMakeChange(event)}
                                                onSelect={(event) => handleMakeChange(event)}
                                                className="form-control"
                                                style={{width: "100%"}}
                                            />
                                            <datalist id="makes">
                                                {makeOptions.map(item => {
                                                    return <option key={item.id} value={item.name}/>
                                                })}
                                            </datalist>

                                        </label>
                                        <label>????????????
                                            <input
                                                type="text"
                                                value={model}
                                                list="modelList"
                                                name="modelList"
                                                className="form-control"
                                                style={{width: "100%"}}
                                                disabled={isModelDisabled}
                                                onChange={(event) =>
                                                    handleModelChange(event)}
                                            />
                                            <datalist id="modelList">
                                                {[...new Set(modelOptions.filter(item => item.make.name === make).map(item => item.model))]
                                                    .map(item => {
                                                        return <option key={item} value={item}/>
                                                    })
                                                }
                                            </datalist>
                                        </label>
                                        <label>????????????????????????
                                            <input
                                                type="text"
                                                value={pack}
                                                list="packList"
                                                name="packList"
                                                className="form-control"
                                                style={{width: "100%"}}
                                                disabled={isPackDisabled}
                                                onChange={(event) =>
                                                    setPack(event.target.value)}
                                            />
                                            <datalist id="packList">
                                                {modelOptions.filter(item => item.model === model).map(item => {
                                                    return <option key={item.id} value={item.pack}/>
                                                })}
                                            </datalist>
                                        </label>
                                        <label>???????????? ??????????????????
                                            <input
                                                type="text"
                                                value={exportedFrom}
                                                list="exportedFromList"
                                                name="exportedFromList"
                                                className="form-control"
                                                style={{width: "100%"}}
                                                onChange={(event) =>
                                                    setExportedFrom(event.target.value)}
                                            />
                                            <datalist id="exportedFromList">
                                                {exportedFromOptions.map(item => {
                                                    return <option key={item.id} value={item.name}/>
                                                })}
                                            </datalist>
                                        </label>
                                    </div>
                                    <div>
                                        <label>?????? ??????????????
                                            <input
                                                type="text"
                                                value={manufactureYear}
                                                className="form-control"
                                                style={{width: "100%"}}
                                                onChange={(event) =>
                                                    setManufactureYear(event.target.value)}
                                            />
                                        </label>
                                        <label>????????????
                                            <input
                                                type="text"
                                                value={mileage}
                                                className="form-control"
                                                style={{width: "100%"}}
                                                onChange={(event) =>
                                                    setMileage(event.target.value)}
                                            />
                                        </label>
                                        <label> ?????????? ????????????????????
                                            <input
                                                type="text"
                                                value={exteriorColor}
                                                list="exteriorColorList"
                                                name="exteriorColorList"
                                                className="form-control"
                                                style={{width: "100%"}}
                                                onChange={(event) =>
                                                    setExteriorColor(event.target.value)}
                                            />
                                            <datalist id="exteriorColorList">
                                                {exteriorColorOptions.map(item => {
                                                    return <option key={item.id} value={item.name}/>
                                                })}
                                            </datalist>
                                        </label>
                                        <label> ?????????? ????????????
                                            <input
                                                type="text"
                                                value={interiorColor}
                                                list="interiorColorList"
                                                name="interiorColorList"
                                                className="form-control"
                                                style={{width: "100%"}}
                                                onChange={(event) =>
                                                    setInteriorColor(event.target.value)}
                                            />
                                            <datalist id="interiorColorList">
                                                {interiorColorOptions.map(item => {
                                                    return <option key={item.id} value={item.name}/>
                                                })}
                                            </datalist>
                                        </label>
                                        <label> ???????????????? ????????????
                                            <select
                                                name="interiorMaterialList"
                                                className="form-control"
                                                style={{width: "112%"}}
                                                onChange={(event) =>
                                                    setInteriorMaterial(event.target.value)}
                                            >
                                                <option selected="selected" style={{display: "none"}}>????????????????
                                                    ????????????????
                                                </option>
                                                <option>???????????????? ????????????????</option>
                                                <option>???????????????? ????????????????</option>
                                                <option>????????????????</option>
                                                <option>??????????</option>
                                                <option>????????????????????</option>
                                                <option>????????</option>
                                            </select>
                                        </label>
                                        <label> ?????????????????? ??????????
                                            <input
                                                type="text"
                                                value={numberOfSeats}
                                                className="form-control"
                                                style={{width: "100%"}}
                                                onChange={(event) =>
                                                    setNumberOfSeats(event.target.value)}
                                            />
                                        </label>
                                        <label> ?????????????????? ????????????
                                            <input
                                                type="text"
                                                value={numberOfDoors}
                                                className="form-control"
                                                style={{width: "100%"}}
                                                onChange={(event) =>
                                                    setNumberOfDoors(event.target.value)}
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label>?????? ????????????
                                            <select
                                                name="fuelType"
                                                className="form-control"
                                                onChange={(event) =>
                                                    setFuelType(event.target.value)}
                                            >
                                                <option selected="selected" style={{display: "none"}}>???????????????? ??????
                                                    ????????????
                                                </option>
                                                <option>????????????</option>
                                                <option>????????????</option>
                                                <option>????????????????????????????</option>
                                                <option>???????????? (????????????-????????????????????????????)</option>
                                                <option>???????????? (????????????-????????????????????????????)</option>
                                                <option>???????????? (??????-????????????)</option>
                                            </select>
                                        </label>
                                        <label>?????????????? ??????????????
                                            <select
                                                name="transmissionType"
                                                className="form-control"
                                                onChange={(event) =>
                                                    setTransmissionType(event.target.value)}
                                            >
                                                <option selected="selected" style={{display: "none"}}>???????????????? ??????????????
                                                    ??????????????
                                                </option>
                                                <option>????????????????</option>
                                                <option>??????????????</option>
                                                <option>????????????????????????</option>
                                            </select>
                                        </label>
                                        <label>????'???? ??????????????
                                            <input
                                                type="text"
                                                value={cubicCapacity}
                                                className="form-control"
                                                style={{width: "100%"}}
                                                onChange={(event) =>
                                                    setCubicCapacity(event.target.value)}
                                            />
                                        </label>
                                        <label>???????????????????? (kW)
                                            <input
                                                type="text"
                                                value={powerKW}
                                                className="form-control"
                                                style={{width: "100%"}}
                                                onChange={(event) =>
                                                    setPowerKW(event.target.value)}
                                            />
                                        </label>
                                        <label>???????????????????? (PS)
                                            <input
                                                type="text"
                                                value={powerPS}
                                                className="form-control"
                                                style={{width: "100%"}}
                                                onChange={(event) =>
                                                    setPowerPS(event.target.value)}
                                            />
                                        </label>
                                        <label>????????????
                                            <select
                                                name="drive"
                                                className="form-control"
                                                style={{width: "127%"}}
                                                onChange={(event) =>
                                                    setDrive(event.target.value)}
                                            >
                                                <option selected="selected" style={{display: "none"}}>???????????????? ????????????
                                                </option>
                                                <option>???????????????? ????????????</option>
                                                <option>???????????? ????????????</option>
                                                <option>???????????? ????????????</option>
                                            </select>
                                        </label><br/>
                                        <label>?????? ??????
                                            <select
                                                name="headlightsType"
                                                style={{width: "122%"}}
                                                className="form-control"
                                                onChange={(event) =>
                                                    setHeadlightsType(event.target.value)}
                                            >
                                                <option selected="selected" style={{display: "none"}}>???????????????? ?????? ??????
                                                </option>
                                                <option>Xenon</option>
                                                <option>Bi-xenon</option>
                                                <option>LED</option>
                                                <option>Laser</option>
                                                <option>????????????????</option>
                                            </select>
                                        </label>
                                        <label>VIN-??????
                                            <input
                                                type="text"
                                                value={vin}
                                                className="form-control"
                                                style={{width: "100%"}}
                                                onChange={(event) =>
                                                    setVin(event.target.value)}
                                            />
                                        </label>
                                    </div>
                                </AutomobileInfo>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>?????? ??????????</Card.Title>
                            <Card.Text>
                                <AutomobileInfo>
                                    <p style={{gridColumnStart: "1", gridColumnEnd: "3"}}>???????????????? ?????????????? ????????????????
                                        ??????????:</p>
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
                            <Card.Title>?????????????????? ????????????</Card.Title>
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
                            <Card.Title>???????????? ???????????????? ????????????????????</Card.Title>
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
                            <Card.Title>???????????? ??????????????</Card.Title>
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
                            <Card.Title>?????????????????? ????????????????????</Card.Title>
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
                    <Card
                        className="p-3"
                    >
                        <Card.Title>???????????????? ???????? (??????????????????)</Card.Title>
                        <Card.Text>
                            <AutomobileInfo>
                                <div style={{gridColumnStart: "1", gridColumnEnd: "4"}}>
                                        <textarea
                                            value={title}
                                            onChange={(event) =>
                                                setTitle(event.target.value)}
                                            style={{minHeight: "100px", width: "100%"}}/>
                                </div>
                            </AutomobileInfo>
                        </Card.Text>
                    </Card>
                    <Card
                        className="p-3"
                    >
                        <Card.Title>????????</Card.Title>
                        <Card.Text>
                            <AutomobileInfo>
                                <div style={{gridColumnStart: "1", gridColumnEnd: "4"}}>
                                        <textarea
                                            value={description}
                                            onChange={(event) =>
                                                setDescription(event.target.value)}
                                            style={{minHeight: "100px", width: "100%"}}/>
                                </div>
                            </AutomobileInfo>
                        </Card.Text>
                    </Card>
                    <Card className="p-3">
                        <Card.Title>??????????????????</Card.Title>
                        <Card.Text style={{paddingBottom: "12px"}}>
                            <EmployeeSelectDealership required="true"
                                                      onChange={(event) => {
                                                          DealershipService.getById(event.target.value)
                                                              .then(result => setDealership(result.data))
                                                      }}
                            >
                                <option
                                    selected="selected"
                                    style={{display: "none"}}
                                >
                                    ???????????????? ??????????????????
                                </option>
                                {dealershipOption.map(item =>
                                    <option key={item.id} value={item.id}>{item.city}</option>
                                )}
                            </EmployeeSelectDealership>
                            <label><input
                                readOnly
                                type="checkbox"
                                checked={isAvailable}
                                onClick={() => setIsAvailable(!isAvailable)}
                            />
                                ???????????????????? ?????? ?? ??????????????????
                            </label><br/>
                            {
                                !isAvailable &&
                                <label>?????????????????? ???????? ????????????????
                                    <input type="date"
                                           className="form-control"
                                           onChange={(event) =>
                                               setExpectedArrivalDate(event.target.value)}
                                           min={moment().format("YYYY-MM-DD")}/>
                                </label>
                            }
                        </Card.Text>
                    </Card>
                    <Card
                        className="p-3"
                    >
                        <Card.Title>????????</Card.Title>
                        <Card.Text>
                            <AutomobileInfo>
                                <label>?????????????? ????????
                                    <input
                                        type="number"
                                        value={actualPrice}
                                        className="form-control"
                                        style={{width: "100%"}}
                                        min="1"
                                        onChange={(event) =>
                                            setActualPrice(event.target.value)}
                                    />
                                </label>
                                <label>???????? ???? ????????????
                                    <input
                                        type="number"
                                        value={expectedSellingPrice}
                                        className="form-control"
                                        style={{width: "100%"}}
                                        min="1"
                                        onChange={(event) =>
                                            setExpectedSellingPrice(event.target.value)}
                                    />
                                </label>
                            </AutomobileInfo>
                        </Card.Text>
                    </Card>
                    <Button className="m-3"
                            variant="success"
                            onClick={(event) => add(event)}
                    >
                        <NavLink to="/automobiles" style={{color:"white", textDecoration:"none"}}>
                            Save
                        </NavLink>
                    </Button>
                </CardDeck>
            </form>
        </AutomobileAddWrapper>
    );
}

export default AutomobileAddComponent;