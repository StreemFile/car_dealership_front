import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import DealershipService from "../../service/DealershipService";
import {DealershipGetAllWrapper} from "../../layouts/dealership/DealershipGetAllLayout";
import DealershipAddModalComponent from "./DealershipAddModalComponent";
import {NavLink} from "react-router-dom";

const DealershipGetAllComponent = (props) => {
    const [dealerships, setDealerships] = useState([]);

    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    useEffect(() => {
        DealershipService.getAll().then(result => setDealerships(result.data));
    })
    return (
        <DealershipGetAllWrapper>
            <table className="table table-warning">
                <thead>
                <tr>
                    <th scope="col">Місто</th>
                    <th scope="col">Адрес</th>
                    <th scope="col">Телефон</th>
                    <th scope="col">Опис</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {dealerships.map(item => {
                    return <tr key={item.id}>
                        <td>{item.city}</td>
                        <td>{item.address}</td>
                        <td>{item.telephone}</td>
                        <td>{item.description}</td>
                        <td>
                            <NavLink to={`/dealership/${item.cityEnglish}`}>
                                <Button
                                    variant="primary"
                                    style={{margin: "3px"}}
                                >
                                    Read
                                </Button>{' '}
                            </NavLink>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
            <Button
                variant="success"
                style={{margin: "3px"}}
                onClick={handleShowAdd}
            >
                Add
            </Button>{' '}
            {
                showAdd &&  <DealershipAddModalComponent
                    show={showAdd}
                    handleClose={handleCloseAdd}
                    service={DealershipService}
                    company={dealerships[0].company}
                />
            }
        </DealershipGetAllWrapper>
    );
}

export default DealershipGetAllComponent;