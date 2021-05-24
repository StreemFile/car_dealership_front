import React from 'react';
import {Button, Card} from "react-bootstrap";
import {NavLink} from "react-router-relative-link";
import {AutomobileInfo} from "../../layouts/automobile/AutomobileLayout";

const AutomobileInfoCardsComponent = (props) => {
    return (
        <Card>
            <Card.Header><h4>{props.title}</h4></Card.Header>
            <Card.Body>
                <Card.Title>{props.price}$</Card.Title>
                <Card.Text>
                    <AutomobileInfo>
                        <div>
                            <p>Тип кузова: {props.vehicleType}</p>
                            <p>Марка: {props.make}</p>
                            <p>Модель: {props.model}</p>
                        </div>
                        <div>
                            <p>Рік випуску: {props.year}</p>
                            <p>Пробіг: {props.mileage}</p>
                            <p>Колір: {props.color}</p>
                        </div>
                        <div>
                            <p>Тип палива: {props.fuelType}</p>
                            <p>Коробка передач: {props.transmissionType}</p>
                            <p>Об'єм двигуна: {props.cubicCapacity}</p>
                        </div>
                    </AutomobileInfo>
                </Card.Text>
                <NavLink to={`/automobile/get/${props.id}`}>
                    <Button variant="primary">Деталі</Button>
                </NavLink>
            </Card.Body>
        </Card>
    );
}

export default AutomobileInfoCardsComponent;