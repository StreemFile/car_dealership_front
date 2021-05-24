import React from 'react';
import {Card} from "react-bootstrap";
import {AutomobileInfo} from "../../../layouts/automobile/AutomobileLayout";

const AutomobileDealershipInfoComponent = (props) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Автосалон:</Card.Title>
                <Card.Text>
                    <AutomobileInfo>
                        <div>
                            <p>Місце знаходження: {props.dealership.city} {props.dealership.address}</p>
                            <p>Номер телефону: {props.dealership.telephone}</p>
                        </div>
                    </AutomobileInfo>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AutomobileDealershipInfoComponent;