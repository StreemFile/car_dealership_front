import React from 'react';

const TableHeadComponent = () => {
    return (
        <thead>
        <tr>
            <th>id</th>
            <th>ПІП</th>
            <th>Телефон</th>
            <th>Місце проживання</th>
            <th>Адреса</th>
            <th>Номер паспорту</th>
            <th>description</th>
            <th>created_at</th>
            <th>modified_at</th>
            <th>edit</th>
            <th>delete</th>
        </tr>
        </thead>
    );
}

export default TableHeadComponent;