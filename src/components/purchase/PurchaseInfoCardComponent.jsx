import React from 'react';
import {Button, Card} from "react-bootstrap";
import {NavLink} from "react-router-relative-link";

const PurchaseInfoCardComponent = (props) => {
    return (
        <Card style={{width: "100%"}}>
            <Card.Header><h4>{props.automobileTitle}</h4></Card.Header>
            <Card.Body>
                <Card.Title>Продано за: {props.automobilePrice}$</Card.Title>
                <Card.Text>
                    <p>Покупець: {props.customerName}</p>
                    <p>Продавець: {props.employeeName}</p>
                    <p>Автосалон: {props.city}</p>
                    <p>Дата продажі: {props.date}</p>
                </Card.Text>
                <NavLink to={`/purchase/get/${props.id}`}>
                    <Button variant="primary">Деталі</Button>
                </NavLink>
            </Card.Body>
        </Card>
    );
}

export default PurchaseInfoCardComponent;