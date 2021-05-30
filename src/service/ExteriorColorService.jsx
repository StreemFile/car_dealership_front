import React, {Component} from 'react';
import axios from "axios";

// const EXTERIOR_COLOR_API_BASE_URL = "http://localhost:8080/api/exteriorColors";
const EXTERIOR_COLOR_API_BASE_URL = "https://car-dealership-cw.herokuapp.com/api/exteriorColors";

class ExteriorColorService extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


    getAll(){
        return axios.get(EXTERIOR_COLOR_API_BASE_URL);
    }

    create(exteriorColor){
        return axios.post(EXTERIOR_COLOR_API_BASE_URL + "/create", exteriorColor);
    }

    getById(id){
        return axios.get(EXTERIOR_COLOR_API_BASE_URL + "/get/" + id);
    }

    update(exteriorColor, exteriorColorId){
        return axios.post(EXTERIOR_COLOR_API_BASE_URL + "/edit/" + exteriorColorId, exteriorColor);
    }

    delete(id){
        return axios.get(EXTERIOR_COLOR_API_BASE_URL + "/delete/" + id);
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default new ExteriorColorService();