import React from 'react';
import {Card, CardDeck} from "react-bootstrap";
import AutomobileGeneralInfoComponent from "./AutomobileGeneralInfoComponent";
import AutomobileDescriptionInfoComponent from "./automobileAdminInfo/AutomobileDescriptionInfoComponent";
import AutomobileOtherInfoComponent from "./AutomobileOtherInfoComponent";
import AutomobileDealershipInfoComponent from "./AutomobileDealershipInfoComponent";
import AutomobileAdminInfoComponent from "./automobileAdminInfo/AutomobileAdminInfoComponent";

const AutomobileAllInfo = (props) => {
    return (
        <CardDeck>
            <Card.Header>
                <h4>{props.automobile.title}</h4>
                <h5>{props.automobile.expectedSellingPrice}$</h5>
                <h6>Собівартість: {props.automobile.actualPrice}$</h6>
            </Card.Header>
            <AutomobileGeneralInfoComponent automobile={props.automobile}/>
            <AutomobileDescriptionInfoComponent description={props.automobile.description}/>
            {
                props.automobile.tyresAndWheels.length > 0
                && <AutomobileOtherInfoComponent
                    infos={props.automobile.tyresAndWheels.sort()}
                    title="Тип коліс"
                />
            }
            {
                props.automobile.parkingSensors.length > 0
                && <AutomobileOtherInfoComponent
                    infos={props.automobile.parkingSensors.sort()}
                    title="Засоби паркування"
                />
            }
            {
                props.automobile.securities.length > 0
                && <AutomobileOtherInfoComponent
                    infos={props.automobile.securities.sort()}
                    title="Засоби безпеки"
                />
            }
            {
                props.automobile.interiorFeatures.length > 0
                && <AutomobileOtherInfoComponent
                    infos={props.automobile.interiorFeatures.sort()}
                    title="Засоби комфорту в салоні"
                />
            }
            {
                props.automobile.extras.length > 0
                && <AutomobileOtherInfoComponent
                    infos={props.automobile.extras.sort()}
                    title="Особливості автомобіля"
                />
            }
            <AutomobileDealershipInfoComponent dealership={props.automobile.dealership}/>
            <AutomobileAdminInfoComponent automobile={props.automobile}/>
        </CardDeck>
    );
}

export default AutomobileAllInfo;