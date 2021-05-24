import React, {useEffect, useState} from 'react';
import {AutomobileByIdWrapper} from "../../layouts/automobile/AutomobileLayout";
import {NavLink, useParams} from "react-router-dom";
import AutomobileService from "../../service/AutomobileService";
import {Button, Card, CardDeck, Spinner} from "react-bootstrap";
import {SpinnerWrapperGrid, SpinnerWrapperLayout} from "../../layouts/SpinnerWrapperLayout";
import AutomobileAdminInfoComponent from "./AutomobileInfo/automobileAdminInfo/AutomobileAdminInfoComponent";
import AutomobileGeneralInfoComponent from "./AutomobileInfo/AutomobileGeneralInfoComponent";
import AutomobileOtherInfoComponent from "./AutomobileInfo/AutomobileOtherInfoComponent";
import AutomobileDealershipInfoComponent from "./AutomobileInfo/AutomobileDealershipInfoComponent";
import AutomobileDescriptionInfoComponent
    from "./AutomobileInfo/automobileAdminInfo/AutomobileDescriptionInfoComponent";

const AutomobileByIdComponent = (props) => {
    const {id} = useParams()
    const [automobile, setAutomobile] = useState(null);

    useEffect(() => {
        AutomobileService.getById(id).then(result => setAutomobile(result.data));
    })

    if (automobile === null) {
        return (
            <SpinnerWrapperGrid>
                <SpinnerWrapperLayout>
                    <Spinner animation="border"/>
                </SpinnerWrapperLayout>
            </SpinnerWrapperGrid>
        )
    }


    return (
        <AutomobileByIdWrapper>
            <CardDeck>
                <Card.Header>
                    <h4>{automobile.title}</h4>
                    <h5>{automobile.expectedSellingPrice}$</h5>
                    <h6>Собівартість: {automobile.actualPrice}$</h6>
                </Card.Header>
                <AutomobileGeneralInfoComponent automobile={automobile}/>
                <AutomobileDescriptionInfoComponent description={automobile.description}/>
                {
                    automobile.tyresAndWheels.length > 0
                    && <AutomobileOtherInfoComponent
                        infos={automobile.tyresAndWheels.sort()}
                        title="Тип коліс"
                    />
                }
                {
                    automobile.parkingSensors.length > 0
                    && <AutomobileOtherInfoComponent
                        infos={automobile.parkingSensors.sort()}
                        title="Засоби паркування"
                    />
                }
                {
                    automobile.securities.length > 0
                    && <AutomobileOtherInfoComponent
                        infos={automobile.securities.sort()}
                        title="Засоби безпеки"
                    />
                }
                {
                    automobile.interiorFeatures.length > 0
                    && <AutomobileOtherInfoComponent
                        infos={automobile.interiorFeatures.sort()}
                        title="Засоби комфорту в салоні"
                    />
                }
                {
                    automobile.extras.length > 0
                    && <AutomobileOtherInfoComponent
                        infos={automobile.extras.sort()}
                        title="Особливості автомобіля"
                    />
                }
                <AutomobileDealershipInfoComponent dealership={automobile.dealership}/>
                <AutomobileAdminInfoComponent automobile={automobile}/>
            </CardDeck>
            <NavLink to={`/automobile/edit/${automobile.id}`}>
                <Button variant="info" className="m-3">
                    Edit
                </Button>{' '}
            </NavLink>
        </AutomobileByIdWrapper>
    );
}

export default AutomobileByIdComponent;