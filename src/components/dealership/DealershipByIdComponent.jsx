import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import DealershipService from "../../service/DealershipService";
import {Button, Spinner} from "react-bootstrap";
import {
    DealershipByIdInfo,
    DealershipByIdTitle,
    DealershipByIdWrapper
} from "../../layouts/dealership/DealershipByIdLayout";
import {SpinnerWrapperLayout, SpinnerWrapperGrid} from "../../layouts/SpinnerWrapperLayout";
import DealershipReadModalComponent from "./DealershipReadModalComponent";
import DealershipDeleteModalComponent from "./DealershipDeleteModalComponent";
import DealershipEditModalComponent from "./DealershipEditModalComponent";

const DealershipByIdComponent = (props) => {
    const {city} = useParams();
    const [id, setId] = useState("");
    const [dealership, setDealership] = useState({});

    const [showRead, setShowRead] = useState(false);
    const handleCloseRead = () => setShowRead(false);
    const handleShowRead = () => setShowRead(true);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    useEffect(() => {
        DealershipService.getIdByEnglishCityName(city).then(result => setId(result.data));
        DealershipService.getById(id).then(result => setDealership(result.data))
    }, [city, id, dealership])


    if (dealership.id !== id) {
        return (
            <SpinnerWrapperGrid>
                <SpinnerWrapperLayout>
                    <Spinner animation="border"/>
                </SpinnerWrapperLayout>
            </SpinnerWrapperGrid>
        )
    }
    return (
        <DealershipByIdWrapper>
            <DealershipByIdTitle>YourCar-{dealership.city}</DealershipByIdTitle>
            <DealershipByIdInfo>
                <p>Наше місцезнаходження: {dealership.city}, {dealership.address}</p>
                <p>Номер телефону: {dealership.telephone}</p>
                <p>Про автосалон: {dealership.description}</p>
            </DealershipByIdInfo>
            <div>
                <Button variant="primary" onClick={handleShowRead}>Read</Button>{' '}
                <Button variant="info" onClick={handleShowEdit}>Edit</Button>{' '}
                <Button variant="danger" onClick={handleShowDelete}>Delete</Button>{' '}
            </div>
            <DealershipReadModalComponent
                show={showRead}
                handleClose={handleCloseRead}
                dealership={dealership} />
            <DealershipDeleteModalComponent
                show={showDelete}
                handleClose={handleCloseDelete}
                service={DealershipService}
                object={dealership}
                rerenderNavbar={props.rerenderNavbar}
            />
            <DealershipEditModalComponent
                show={showEdit}
                handleClose={handleCloseEdit}
                dealership={dealership} />
        </DealershipByIdWrapper>
    );
}

export default DealershipByIdComponent;