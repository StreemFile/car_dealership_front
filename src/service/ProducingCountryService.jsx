import React, {Component} from 'react';
import axios from "axios";

const PRODUCING_COUNTRY_API_BASE_URL = "http://localhost:8080/api/producingCountries";
// const PRODUCING_COUNTRY_API_BASE_URL = "https://car-dealership-cw.herokuapp.com/api/producingCountries";

class ProducingCountryService extends Component{

    constructor(props) {
        super(props);

        this.state = {}
    }


    getAll(){
        return axios.get(PRODUCING_COUNTRY_API_BASE_URL);
    }

    create(producingCountry){
        return axios.post(PRODUCING_COUNTRY_API_BASE_URL + "/create", producingCountry);
    }

    getById(id){
        return axios.get(PRODUCING_COUNTRY_API_BASE_URL + "/get/" + id);
    }

    update(producingCountry, producingCountryId){
        return axios.post(PRODUCING_COUNTRY_API_BASE_URL + "/edit/" + producingCountryId, producingCountry);
    }

    delete(id){
        return axios.get(PRODUCING_COUNTRY_API_BASE_URL + "/delete/" + id);
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default new ProducingCountryService();