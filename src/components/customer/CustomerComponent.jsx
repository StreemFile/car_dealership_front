import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import {CustomerWrapper} from "../../layouts/customer/CustomerLayout";
import {CustomerSortTypes} from "./CustomerSortTypes";

import CustomerService from "../../service/CustomerService";

import CustomerSearchAndFilterInputComponent from "../customer/CustomerSearchAndFilterInputComponent";
import CustomerTableComponent from "./CustomerTableComponent";
import CustomerDeleteModalComponent from "./CustomerDeleteModalComponent";
import CustomerAddModalComponent from "./CustomerAddModalComponent";
import CustomerReadModalComponent from "./CustomerReadModalComponent";
import CustomerEditModalComponent from "./CustomerEditModalComponent";

const CustomerComponent = (props) => {
    const [customers, setCustomers] = useState([]);
    const [selectedSortType, setSelectedSortType] = useState(CustomerSortTypes[0].value);
    const [searchByName, setSearchByName] = useState("");
    const [searchByPassport, setSearchByPassport] = useState("");


    const [customerToAction, setCustomerToAction] = useState({});

    const getCustomerToAction = (id) => {
        CustomerService.getById(id).then(result =>
            setCustomerToAction(result.data))
    }

    const [showRead, setShowRead] = useState(false);
    const handleCloseRead = () => setShowRead(false);
    const handleShowRead = () => setShowRead(true);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    const [isEdited, setIsEdited] = useState(false);

    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);
    const [isAdded, setIsAdded] = useState(false);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);
    const [isDeleted, setIsDeleted] = useState(false);

    const [isNeededToSort, setIsNeededToSort] = useState(false);

    const sort = (customers) => {
        switch (selectedSortType) {
            case "nameAsc":
                return setCustomers(customers.sort((a, b) => (a.name > b.name) ? 1 : -1));
            case "nameDesc":
                return setCustomers(customers.sort((a, b) => (a.name > b.name) ? -1 : 1));
            case "cityAsc":
                return setCustomers(customers.sort((a, b) => (a.placeOfResidence > b.placeOfResidence) ? 1 : -1));
            case "cityDesc":
                return setCustomers(customers.sort((a, b) => (a.placeOfResidence > b.placeOfResidence) ? -1 : 1));
            default:
                return;
        }
    }

    useEffect(() => {
        CustomerService.getAll().then(result => {
            sort(result.data)
        });
        setIsNeededToSort(false);
        setIsAdded(false);
        setIsDeleted(false);
        setIsEdited(false);
    }, [isNeededToSort, isAdded, isDeleted, isEdited,customers])

    return (
        <CustomerWrapper>
            <CustomerSearchAndFilterInputComponent
                selectedSortType={selectedSortType}
                setSelectedSortType={setSelectedSortType}
                searchByName={searchByName}
                setSearchByName={setSearchByName}
                searchByPassport={searchByPassport}
                setSearchByPassport={setSearchByPassport}
                sort={setIsNeededToSort}
            />
            <Button
                variant="success"
                onClick={handleShowAdd}
                style={{margin: "5px"}}
            >
                Add
            </Button>{' '}
            <CustomerTableComponent
                searchByName={searchByName}
                searchByPassport={searchByPassport}
                customers={customers}
                getCustomerToAction={getCustomerToAction}
                handleShowRead={handleShowRead}
                handleShowEdit={handleShowEdit}
                handleShowDelete={handleShowDelete}
            />
            {showDelete && <CustomerDeleteModalComponent
                customer={customerToAction}
                show={showDelete}
                handleClose={handleCloseDelete}
                service={CustomerService}
                setIsDeleted={setIsDeleted}
            />}
            {showAdd && <CustomerAddModalComponent
                show={showAdd}
                handleClose={handleCloseAdd}
                service={CustomerService}
                customers={customers}
                setIsAdded={setIsAdded}
            />}
            {showRead && <CustomerReadModalComponent
                show={showRead}
                handleClose={handleCloseRead}
                customer={customerToAction}
            />}
            {showEdit && <CustomerEditModalComponent
                show={showEdit}
                handleClose={handleCloseEdit}
                customer={customerToAction}
                service={CustomerService}
                setIsEdited={setIsEdited}
            />}
        </CustomerWrapper>
    );
}

export default CustomerComponent;