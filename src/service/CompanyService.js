import React, {Component} from 'react';
import axios from 'axios';

const COMPANY_API_BASE_URL = "http://localhost:8080/api/company"

class CompanyService extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    getAll(){
        return axios.get(COMPANY_API_BASE_URL);
    }

    create(company){
        return axios.post(COMPANY_API_BASE_URL + "/create", company);
    }

    getById(id){
        return axios.get(COMPANY_API_BASE_URL + "/get/" + id);
    }

    update(company, companyId){
        return axios.post(COMPANY_API_BASE_URL + "/edit/" + companyId, company);
    }

    delete(id){
        return axios.get(COMPANY_API_BASE_URL + "/delete/" + id);
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default new CompanyService()