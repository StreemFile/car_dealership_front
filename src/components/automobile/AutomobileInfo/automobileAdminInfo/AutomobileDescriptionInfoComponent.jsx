import React from 'react';
import {Card} from "react-bootstrap";

const AutomobileDescriptionInfoComponent = (props) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Опис</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AutomobileDescriptionInfoComponent;