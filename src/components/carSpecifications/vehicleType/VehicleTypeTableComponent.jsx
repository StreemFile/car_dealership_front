import React from 'react';
import {Button, Card} from "react-bootstrap";

const VehicleTypeTableComponent = (props) => {

    const handleShowRead = (id) => {
        props.getVehicleTypeToAction(id)
        props.handleShowRead();
    }

    const handleShowEdit = (id) => {
        props.getVehicleTypeToAction(id)
        props.handleShowEdit();
    }

    const handleShowDelete = (id) => {
        props.getVehicleTypeToAction(id)
        props.handleShowDelete();
    }

    return (
        <table className="table table-warning">
            <thead>
            <tr>
                <th scope="col">Тип кузова</th>
                <th scope="col">Опис</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {props.vehicleTypes.map(item => {
                return <tr key={item.id}>
                    <td>{item.vehicleType}</td>
                    <td>{item.description}</td>
                    <td>
                        <Button variant="primary" onClick={() => handleShowRead(item.id)}>Read</Button>{' '}
                        <Button variant="info" onClick={() => handleShowEdit(item.id)}>Edit</Button>{' '}
                        <Button variant="danger" onClick={() => handleShowDelete(item.id)}>Delete</Button>{' '}
                    </td>
                </tr>
            })}
            </tbody>
        </table>
    );
}

export default VehicleTypeTableComponent;