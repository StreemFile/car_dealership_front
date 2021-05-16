import React from 'react';
import {EmployeeFilterWrapper} from "../../layouts/employee/EmployeeLayout";
import {CustomerSortTypes} from "./CustomerSortTypes";


const CustomerSearchAndFilterInputComponent = (props) => {
    const handleSort = (event) => {
        props.setSelectedSortType(event.target.value);
        props.sort(true);
    }
    return (
        <EmployeeFilterWrapper>
            Фільтр:
            <select
                style={{margin: "5px"}}
                value={props.selectedSortType.value}
                onChange={(event) =>
                    handleSort(event)}
            >
                {CustomerSortTypes.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            <br/>
            Пошук за іменем
            <input
                style={{margin: "5px"}}
                type="text"
                value={props.searchByName}
                onChange={(event) =>
                    props.setSearchByName(event.target.value)}
            />
            <br/>
            Пошук за номером паспорта
            <input
                style={{margin: "5px"}}
                type="text"
                value={props.searchByPassport}
                onChange={(event) =>
                    props.setSearchByPassport(event.target.value)}
            />
        </EmployeeFilterWrapper>
    );
}

export default CustomerSearchAndFilterInputComponent;