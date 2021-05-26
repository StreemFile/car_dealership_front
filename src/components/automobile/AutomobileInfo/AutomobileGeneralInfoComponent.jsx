import React, {useEffect, useState} from 'react';
import {AutomobileInfo} from "../../../layouts/automobile/AutomobileLayout";
import {Card} from "react-bootstrap";
import AutomobileInOrderService from "../../../service/AutomobileInOrderService";

const AutomobileGeneralInfoComponent = (props) => {

    const [expectedArrivalDate, setExpectedArrivalDate] = useState(null)

    useEffect(() => {
        if(props.automobile.availability === "Замовлений"){
            AutomobileInOrderService.getByAutomobileId(props.automobile.id)
                .then(result => setExpectedArrivalDate(result.data.expectedArrivalDate))
        }
    },[props])
    return (
        <Card>
            <Card.Body>
                <Card.Title>Основні характеристики:</Card.Title>
                <Card.Text>
        <AutomobileInfo>
            <div>
                <p>Тип кузова: {props.automobile.vehicleType.name}</p>
                <p>Марка: {props.automobile.modelAndPackage.make.name}</p>
                <p>Модель: {props.automobile.modelAndPackage.model}</p>
                {
                    props.automobile.modelAndPackage.pack !== "" &&
                    <p>Комплектація: {props.automobile.modelAndPackage.pack}</p>
                }
                <p>Країна пригнання: {props.automobile.exportedFrom.name}</p>
                <p>Наявність: {props.automobile.availability}</p>
                {expectedArrivalDate !== null
                && <p>Очікувана дата прибуття: {expectedArrivalDate}</p>}

            </div>
            <div>
                <p>Рік випуску: {props.automobile.manufactureYear}</p>
                <p>Пробіг: {props.automobile.mileage}</p>
                <p>Колір автомобіля: {props.automobile.exteriorColor.name}</p>
                <p>Колір салону: {props.automobile.interiorColor.name}</p>
                <p>Матеріал салону: {props.automobile.interiorMaterial}</p>
                <p>Кількість місць: {props.automobile.numberOfSeats}</p>
                <p>Кількість дверей: {props.automobile.numberOfDoors}</p>
            </div>
            <div>
                <p>Тип палива: {props.automobile.engine.fuelType}</p>
                <p>Коробка передач: {props.automobile.engine.transmissionType}</p>
                <p>Об'єм двигуна: {props.automobile.engine.cubicCapacity}</p>
                <p>Потужність: {props.automobile.engine.powerKW}(kW)/{props.automobile.engine.powerPS}(PS)</p>
                <p>{props.automobile.drive}</p>
                <p>Тип фар: {props.automobile.headlightsType}</p>
                <p>VIN-Code: {props.automobile.vin}</p>
            </div>
        </AutomobileInfo>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AutomobileGeneralInfoComponent;