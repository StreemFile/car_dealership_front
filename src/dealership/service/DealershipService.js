import React, {Component} from 'react';
import axios from 'axios';

const DEALERSHIP_API_BASE_URL = "http://localhost:8080/api/dealerships"

class CompanyService extends Component {
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

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default new CompanyService()