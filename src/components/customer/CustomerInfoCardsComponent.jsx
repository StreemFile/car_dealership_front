import React from 'react';
import {Card} from "react-bootstrap";

const CustomerInfoCardsComponent = (props) => {
    return (
        <div>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>ID</Card.Title>
                <Card.Text>{props.customer.id}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>ПІП</Card.Title>
                <Card.Text>{props.customer.name}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Номер паспорта</Card.Title>
                <Card.Text>{props.customer.passport}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Номер телефона</Card.Title>
                <Card.Text>{props.customer.telephone}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Місто проживання</Card.Title>
                <Card.Text>{props.customer.placeOfResidence}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Адрес</Card.Title>
                <Card.Text>{props.customer.address}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Опис</Card.Title>
                <Card.Text>{props.customer.description}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Дата створення</Card.Title>
                <Card.Text>{props.customer.created_at}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Дата останньої модифікації</Card.Title>
                <Card.Text>{props.customer.modified_at}</Card.Text>
            </Card>
        </div>
    );
}

export default CustomerInfoCardsComponent;