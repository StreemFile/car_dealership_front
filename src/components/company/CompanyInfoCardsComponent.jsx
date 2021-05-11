import React from 'react';
import {Card, Modal} from "react-bootstrap";
import {CompanyGetAdminDescriptionText} from "../../layouts/company/CompanyGetLayout";

const CompanyInfoCardsComponent = (props) => {
    return (
        <div>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>ID</Card.Title>
                <Card.Text>{props.company.id}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Назва компанії</Card.Title>
                <Card.Text>{props.company.name}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Адреса</Card.Title>
                <Card.Text>{props.company.cityOfTheMainOffice}, {props.company.addressOfTheMainOffice}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Номер телефону тех. підтримки</Card.Title>
                <Card.Text>{props.company.telephoneOfTheMainOffice}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Електронна пошта</Card.Title>
                <Card.Text>{props.company.email}</Card.Text>
            </Card>
            <Card
                className="mb-2 p-3 text-center"
            >
                <Card.Title>Опис</Card.Title>
                <Card.Text>
                    <CompanyGetAdminDescriptionText>
                        {props.company.description}
                    </CompanyGetAdminDescriptionText>
                </Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Дата створення</Card.Title>
                <Card.Text>{props.company.created_at}</Card.Text>
            </Card>
            <Card
                className="mb-2 text-center"
            >
                <Card.Title>Дата останньої модифікації</Card.Title>
                <Card.Text>{props.company.modified_at}</Card.Text>
            </Card>
        </div>
    );
}

export default CompanyInfoCardsComponent;