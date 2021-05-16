import React from 'react';
import {Button} from "react-bootstrap";

const CustomerTableComponent = (props) => {
    const handleShowRead = (id) => {
        debugger;
        props.getCustomerToAction(id);
        props.handleShowRead();
    }

    const handleShowEdit = (id) => {
        props.getCustomerToAction(id);
        props.handleShowEdit();
    }

    const handleShowDelete = (id) => {
        props.getCustomerToAction(id);
        props.handleShowDelete();
    }

    return (
        <table className="table table-warning">
            <thead>
            <tr>
                <th scope="col">ПІП</th>
                <th scope="col">Номер паспорта</th>
                <th scope="col">Телефон</th>
                <th scope="col">Місто</th>
                <th scope="col">Адреса</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {
                props.customers
                    .filter(item =>
                        props.searchByName.length > 2 ?
                            item.name.toLowerCase()
                                .includes(props.searchByName.toLowerCase())
                            : item)
                    .filter(item =>
                        props.searchByPassport.length > 2 ?
                            item.passport.toLowerCase()
                                .includes(props.searchByPassport.toLowerCase())
                            : item)
                    .map(item => {
                        return <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.passport}</td>
                            <td>{item.telephone}</td>
                            <td>{item.placeOfResidence}</td>
                            <td>{item.address}</td>
                            <td>
                                <Button
                                    variant="primary"
                                    onClick={() => handleShowRead(item.id)}
                                >
                                    Read
                                </Button>{' '}
                                <Button
                                    variant="info"
                                    onClick={() => handleShowEdit(item.id)}
                                >
                                    Edit
                                </Button>{' '}
                                <Button
                                    variant="danger"
                                    onClick={() => handleShowDelete(item.id)}
                                >
                                    Delete
                                </Button>{' '}
                            </td>
                        </tr>
                    })
            }
            </tbody>
        </table>
    );
}

export default CustomerTableComponent;