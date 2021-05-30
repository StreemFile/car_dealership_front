import React, {Component} from 'react';
import axios from "axios";

// const MAKE_API_BASE_URL = "http://localhost:8080/api/makes";
const MAKE_API_BASE_URL = "https://car-dealership-cw.herokuapp.com/api/makes";

class MakeService extends Component{

    constructor(props) {
        super(props);

        this.state = {}
    }


    getAll(){
        return axios.get(MAKE_API_BASE_URL);
    }

    create(make){
        return axios.post(MAKE_API_BASE_URL + "/create", make);
    }

    getById(id){
        return axios.get(MAKE_API_BASE_URL + "/get/" + id);
    }

    getByName(name){
        return axios.get(MAKE_API_BASE_URL + "/getByName/" + name)
    }

    update(make, makeId){
        return axios.post(MAKE_API_BASE_URL + "/edit/" + makeId, make);
    }

    delete(id){
        return axios.get(MAKE_API_BASE_URL + "/delete/" + id);
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default new MakeService();