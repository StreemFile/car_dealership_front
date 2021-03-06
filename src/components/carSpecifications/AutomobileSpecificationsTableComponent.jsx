import React from 'react';
import {Button} from "react-bootstrap";

const AutomobileSpecificationsTableComponent = (props) => {

    const handleShowRead = (id) => {
        props.getObjectToAction(id)
        props.handleShowRead();
    }

    const handleShowEdit = (id) => {
        props.getObjectToAction(id)
        props.handleShowEdit();
    }

    const handleShowDelete = (id) => {
        props.getObjectToAction(id)
        props.handleShowDelete();
    }

    return (
        <table className="table table-warning">
            <thead>
            <tr>
                <th scope="col">{props.name}</th>
                <th scope="col">Опис</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {props.objects.map(item => {
                return <tr key={item.id}>
                    <td>{item.name}</td>
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

export default AutomobileSpecificationsTableComponent;