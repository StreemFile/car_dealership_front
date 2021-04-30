import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import DealershipService from "../../../service/DealershipService";
import {Spinner} from "react-bootstrap";

const DealershipById = (props) => {
    const {city} = useParams();
    const [id, setId] = useState("");
    const [dealership, setDealership] = useState({});

    useEffect(() => {
        DealershipService.getIdByEnglishCityName(city).then(result => setId(result.data));
        DealershipService.getById(id).then(result => setDealership(result.data))
    }, [city, id])

    if (dealership.id !== id) {
        return (
            <Spinner animation="border"/>
        )
    }
    return (
        <div>
            {dealership.city}
        </div>
    );
}

export default DealershipById;