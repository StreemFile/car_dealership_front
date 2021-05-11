import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";

import {EmployeeWrapper} from "../../layouts/employee/EmployeeLayout";

import EmployeeService from "../../service/EmployeeService";

import {SortTypes} from "./SortTypes";

import EmployeeTableComponent from "./EmployeeTableComponent";
import EmployeeSearchAndFilterInputComponent from "./EmployeeSearchAndFilterInputComponent";
import EmployeeDeleteModalComponent from "./EmployeeDeleteModalComponent";
import EmployeeAddModalComponent from "./EmployeeAddModalComponent";
import EmployeeReadModalComponent from "./EmployeeReadModalComponent";

const EmployeeComponent = (props) => {
    const [employees, setEmployees] = useState([]);
    const [selectedSortType, setSelectedSortType] = useState(SortTypes[0].value);
    const [searchByName, setSearchByName] = useState("");
    const [searchByPassport, setSearchByPassport] = useState("");


    const [employeeToAction, setEmployeeToAction] = useState({});

    const getEmployeeToAction = (id) => {
        EmployeeService.getById(id).then(result =>
            setEmployeeToAction(result.data))
    }

    const [showRead, setShowRead] = useState(false);
    const handleCloseRead = () => setShowRead(false);
    const handleShowRead = () => setShowRead(true);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);
    const [isAdded, setIsAdded] = useState(false);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);
    const [isDeleted, setIsDeleted] = useState(false);

    const [isNeededToSort, setIsNeededToSort] = useState(false);

    const sort = (employees) => {
        switch (selectedSortType) {
            case "nameAsc":
                return setEmployees(employees.sort((a, b) => (a.name > b.name) ? 1 : -1));
            case "nameDesc":
                return setEmployees(employees.sort((a, b) => (a.name > b.name) ? -1 : 1));
            case "dealershipCityAsc":
                return setEmployees(employees.sort((a, b) => (a.dealership.city > b.dealership.city) ? 1 : -1));
            case "dealershipCityDesc":
                return setEmployees(employees.sort((a, b) => (a.dealership.city > b.dealership.city) ? -1 : 1));
            case "salaryAsc":
                return setEmployees(employees.sort((a, b) => (a.salary > b.salary) ? 1 : -1));
            case "salaryDesc":
                return setEmployees(employees.sort((a, b) => (a.salary > b.salary) ? -1 : 1));
            default:
                return;
        }
    }

    useEffect(() => {
        EmployeeService.getAll().then(result => {
            sort(result.data)
        });
        setIsNeededToSort(false);
        setIsAdded(false);
        setIsDeleted(false);
        // EmployeeService.sortBy(selectedSortType).then(result => setEmployees(result.data));
    }, [isNeededToSort, isAdded, isDeleted])

    return (
        <EmployeeWrapper>
            <EmployeeSearchAndFilterInputComponent
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
            <EmployeeTableComponent
                searchByName={searchByName}
                searchByPassport={searchByPassport}
                employees={employees}
                getEmployeeToAction={getEmployeeToAction}
                handleShowRead={handleShowRead}
                handleShowEdit={handleShowEdit}
                handleShowDelete={handleShowDelete}
            />
            {showDelete && <EmployeeDeleteModalComponent
                employee={employeeToAction}
                show={showDelete}
                handleClose={handleCloseDelete}
                service={EmployeeService}
                setIsDeleted={setIsDeleted}
            />}
            {showAdd && <EmployeeAddModalComponent
                show={showAdd}
                handleClose={handleCloseAdd}
                service={EmployeeService}
                employees={employees}
                setIsAdded={setIsAdded}
            />}
            {showRead && <EmployeeReadModalComponent
                show={showRead}
                handleClose={handleCloseRead}
                employee={employeeToAction}
            />}

        </EmployeeWrapper>
    );
}


export default EmployeeComponent;