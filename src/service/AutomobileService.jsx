import React, {Component} from 'react';
import axios from 'axios';

// const AUTOMOBILE_API_BASE_URL = "http://localhost:8080/api/automobiles"
const AUTOMOBILE_API_BASE_URL = "https://car-dealership-cw.herokuapp.com/api/automobiles"

class AutomobileService extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    getAll(){
        return axios.get(AUTOMOBILE_API_BASE_URL);
    }

    create(automobile){
        return axios.post(AUTOMOBILE_API_BASE_URL + "/create", automobile);
    }

    getById(id){
        return axios.get(AUTOMOBILE_API_BASE_URL + "/get/" + id);
    }

    update(automobile, automobileId){
        // debugger;
        return axios.post(AUTOMOBILE_API_BASE_URL + "/edit/" + automobileId, automobile);
    }

    delete(id){
        return axios.get(AUTOMOBILE_API_BASE_URL + "/delete/" + id);
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default new AutomobileService()