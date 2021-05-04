import React, {useEffect, useState} from 'react';
import {CompanyGetRightSideContent} from "../../layouts/company/CompanyGetLayout";
import CompanyService from "../../service/CompanyService";
import {Button, Card, CardDeck, CardGroup, Modal, Spinner} from "react-bootstrap";
import CompanyDetailsModalComponent from "./CompanyDetailsModalComponent";
import CompanyEditModalComponent from "./CompanyEditModalComponent";

const CompanyGetRightSideContentComponent = () => {

    const [company, setCompany] = useState({});

    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const [showEditModal, setShowEditModal] = useState(false);
    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);


    useEffect(() => {
        CompanyService.getAll().then(result => {
            setCompany(result.data[0]);
        });
    })
    return (
        <CompanyGetRightSideContent>
            <p>
                {company.description}
            </p>
            <Button variant="warning" onClick={handleShowModal}>
                Read
            </Button>{' '}
            {showModal && <CompanyDetailsModalComponent
                show={showModal}
                handleCloseModal={handleCloseModal}
                company={company}
            />}
            <Button variant="warning" onClick={handleShowEditModal}>
                Edit
            </Button>{' '}
            {showEditModal && <CompanyEditModalComponent
                show={showEditModal}
                handleCloseEditModal={handleCloseEditModal}
                company={company}
            />}
        </CompanyGetRightSideContent>
    );
}

export default CompanyGetRightSideContentComponent;