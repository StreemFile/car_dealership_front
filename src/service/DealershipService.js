import React, {Component} from 'react';
import axios from 'axios';

const DEALERSHIP_API_BASE_URL = "http://localhost:8080/api/dealerships"
// const DEALERSHIP_API_BASE_URL = "https://car-dealership-cw.herokuapp.com/api/dealerships"

class DealershipService extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    getAll(){
        return axios.get(DEALERSHIP_API_BASE_URL);
    }

    create(dealership){
        return axios.post(DEALERSHIP_API_BASE_URL + "/create", dealership);
    }

    getById(id){
        return axios.get(DEALERSHIP_API_BASE_URL + "/get/" + id);
    }

    update(dealership, dealershipId){
        return axios.post(DEALERSHIP_API_BASE_URL + "/edit/" + dealershipId, dealership);
    }

    delete(id){
        return axios.get(DEALERSHIP_API_BASE_URL + "/delete/" + id);
    }

    getIdByEnglishCityName(city){
        axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        return axios.get(DEALERSHIP_API_BASE_URL + "/getIdByEnglishCityName/" + city)
    }

    getTotalSalaries(){
        return axios.get(DEALERSHIP_API_BASE_URL + "/totalSalaries");
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default new DealershipService();