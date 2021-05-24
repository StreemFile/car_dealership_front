import React from 'react';
import {Button} from "react-bootstrap";

const ModelAndPackageTableComponent = (props) => {

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
                <th scope="col">Марка</th>
                <th scope="col">Модель</th>
                <th scope="col">Комплектація</th>
                <th scope="col">Опис</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {props.objects.sort((a,b) => a.make.name > b.make.name ? 1:-1).map(item => {
                return <tr key={item.id}>
                    <td>{item.make.name}</td>
                    <td>{item.model}</td>
                    <td>{item.pack}</td>
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

export default ModelAndPackageTableComponent;