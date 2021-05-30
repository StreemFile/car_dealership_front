import React, {Component} from 'react';
import axios from "axios";

// const MODEL_AND_PACKAGE_API_BASE_URL = "http://localhost:8080/api/modelAndPackages";
const MODEL_AND_PACKAGE_API_BASE_URL = "https://car-dealership-cw.herokuapp.com/api/modelAndPackages";

class ModelAndPackageService extends Component{

    constructor(props) {
        super(props);

        this.state = {}
    }


    getAll(){
        return axios.get(MODEL_AND_PACKAGE_API_BASE_URL);
    }

    create(modelAndPackage){
        return axios.post(MODEL_AND_PACKAGE_API_BASE_URL + "/create", modelAndPackage);
    }

    getById(id){
        return axios.get(MODEL_AND_PACKAGE_API_BASE_URL + "/get/" + id);
    }

    update(modelAndPackage, modelAndPackageId){
        return axios.post(MODEL_AND_PACKAGE_API_BASE_URL + "/edit/" + modelAndPackageId, modelAndPackage);
    }

    delete(id){
        return axios.get(MODEL_AND_PACKAGE_API_BASE_URL + "/delete/" + id);
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default new ModelAndPackageService();