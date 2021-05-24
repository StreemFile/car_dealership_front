import React from 'react';
import {AutomobileInfo} from "../../../layouts/automobile/AutomobileLayout";
import {Card} from "react-bootstrap";

const AutomobileOtherInfoComponent = (props) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.title}:</Card.Title>
                <Card.Text>
                    <AutomobileInfo>
                        {props.infos.map(item => {
                            return <p>{item}</p>
                        })}
                    </AutomobileInfo>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AutomobileOtherInfoComponent;