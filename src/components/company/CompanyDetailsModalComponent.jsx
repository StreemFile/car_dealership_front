import React, {useState} from 'react';
import {Button, Card, Modal} from "react-bootstrap";
import {CompanyGetAdminDescriptionText} from "../../layouts/company/CompanyGetLayout";
import CompanyEditModalComponent from "./CompanyEditModalComponent";

const CompanyDetailsModalComponent = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleCloseModal} animation={true}>
            <Modal.Header>
                <Modal.Title>Company details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleCloseModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CompanyDetailsModalComponent;