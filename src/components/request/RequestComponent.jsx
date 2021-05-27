import React from 'react';
import {AllAutomobilesWrapper} from "../../layouts/automobile/AutomobileLayout";
import {Card, CardDeck} from "react-bootstrap";

const RequestComponent = (props) => {
    return (
        <AllAutomobilesWrapper style={{backgroundColor: 'white', borderRadius: "10px", width: "70%"}}>
            <CardDeck>
                <Card.Header><h4>Запити</h4></Card.Header>
                <Card>
                    <Card.Body>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </AllAutomobilesWrapper>
    );
}

export default RequestComponent;