import React, {Component} from 'react';
import axios from "axios";

const INTERIOR_COLOR_API_BASE_URL = "http://localhost:8080/api/interiorColors";
// const INTERIOR_COLOR_API_BASE_URL = "https://car-dealership-cw.herokuapp.com/api/interiorColors";

class InteriorColorService extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


    getAll(){
        return axios.get(INTERIOR_COLOR_API_BASE_URL);
    }

    create(interiorColor){
        return axios.post(INTERIOR_COLOR_API_BASE_URL + "/create", interiorColor);
    }

    getById(id){
        return axios.get(INTERIOR_COLOR_API_BASE_URL + "/get/" + id);
    }

    update(interiorColor, interiorColorId){
        return axios.post(INTERIOR_COLOR_API_BASE_URL + "/edit/" + interiorColorId, interiorColor);
    }

    delete(id){
        return axios.get(INTERIOR_COLOR_API_BASE_URL + "/delete/" + id);
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default new InteriorColorService();