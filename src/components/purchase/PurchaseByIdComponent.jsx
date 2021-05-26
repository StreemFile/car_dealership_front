import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PurchaseService from "../../service/PurchaseService";
import {AutomobileByIdWrapper} from "../../layouts/automobile/AutomobileLayout";
import {Accordion, Button, Card, CardDeck, Spinner} from "react-bootstrap";
import {InfoCardAccordionWrapper} from "../../layouts/InfoCardLayout";
import AutomobileAllInfo from "../automobile/AutomobileInfo/AutomobileAllInfo";
import CustomerInfoCardsComponent from "../customer/CustomerInfoCardsComponent";
import EmployeeInfoCardsComponent from "../employee/EmployeeInfoCardsComponent";
import {SpinnerWrapperGrid, SpinnerWrapperLayout} from "../../layouts/SpinnerWrapperLayout";
import PurchaseDeleteModalComponent from "./PurchaseDeleteModalComponent";
import PurchaseEditModalComponent from "./PurchaseEditModalComponent";

const PurchaseByIdComponent = (props) => {
    const {id} = useParams()
    const [purchase, setPurchase] = useState(null);

    const [showEdit, setShowEdit] = useState(false);
    const handleShowEdit = () => setShowEdit(true);
    const handleCloseEdit = () => setShowEdit(false);
    const [isEdited, setIsEdited] = useState(false);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);


    useEffect(() => {
        debugger;
        PurchaseService.getById(id).then(result => setPurchase(result.data));
        if(isEdited){
            setIsEdited(false);
        }
    },[isEdited])

    if (purchase === null) {
        return (
            <SpinnerWrapperGrid>
                <SpinnerWrapperLayout>
                    <Spinner animation="border"/>
                </SpinnerWrapperLayout>
            </SpinnerWrapperGrid>
        )
    }
    return (
        <AutomobileByIdWrapper>
            <CardDeck>
                <Card
                    className="text-center"
                >
                    <Card.Title>Автомобіль</Card.Title>
                    {
                        <Card.Text style={{display: 'grid'}}>
                            <InfoCardAccordionWrapper>
                                <Accordion defaultActiveKey="-1">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            {purchase.automobile.title}
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <AutomobileAllInfo
                                                    automobile={purchase.automobile}
                                                />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Toggle as={Card.Footer} eventKey="0">
                                            Нажміть, щоб відкрити/закрити повну інформацію
                                        </Accordion.Toggle>
                                    </Card>
                                </Accordion>
                            </InfoCardAccordionWrapper>
                        </Card.Text>
                    }
                </Card>
                <Card
                    className="text-center"
                >
                    <Card.Title>Покупець</Card.Title>
                    {
                        <Card.Text style={{display: 'grid'}}>
                            <InfoCardAccordionWrapper>
                                <Accordion defaultActiveKey="-1">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            {purchase.customer.name}
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <CustomerInfoCardsComponent
                                                    customer={purchase.customer}
                                                />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Toggle as={Card.Footer} eventKey="0">
                                            Нажміть, щоб відкрити/закрити повну інформацію
                                        </Accordion.Toggle>
                                    </Card>
                                </Accordion>
                            </InfoCardAccordionWrapper>
                        </Card.Text>
                    }
                </Card>
                <Card
                    className="text-center"
                >
                    <Card.Title>Продавець</Card.Title>
                    {
                        <Card.Text style={{display: 'grid'}}>
                            <InfoCardAccordionWrapper>
                                <Accordion defaultActiveKey="-1">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            {purchase.employee.name}
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <EmployeeInfoCardsComponent
                                                    employee={purchase.employee}
                                                />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Toggle as={Card.Footer} eventKey="0">
                                            Нажміть, щоб відкрити/закрити повну інформацію
                                        </Accordion.Toggle>
                                    </Card>
                                </Accordion>
                            </InfoCardAccordionWrapper>
                        </Card.Text>
                    }
                </Card>
                <Card
                    className="text-center"
                >
                    <Card.Title>Ціна</Card.Title>
                    <Card.Text>{purchase.soldPrice}$</Card.Text>
                </Card>
                <Card
                    className="text-center"
                >
                    <Card.Title>Дата продажі</Card.Title>
                    <Card.Text>{purchase.purchaseDate}</Card.Text>
                </Card>
                <Card
                    className="text-center"
                >
                    <Card.Title>Опис</Card.Title>
                    <Card.Text>{purchase.description}</Card.Text>
                </Card>
            </CardDeck>
            <div className="m-3">
                <Button variant="info" onClick={handleShowEdit}>Edit</Button>{' '}
                <Button variant="danger" onClick={handleShowDelete}>Delete</Button>{' '}
            </div>
            <PurchaseDeleteModalComponent
                purchase={purchase}
                service={PurchaseService}
                show={showDelete}
                handleClose={handleCloseDelete}
            />
            <PurchaseEditModalComponent
                purchase={purchase}
                show={showEdit}
                service={PurchaseService}
                handleClose={handleCloseEdit}
                setIsEdited={setIsEdited}
            />
        </AutomobileByIdWrapper>
    );
}

export default PurchaseByIdComponent;