import React, {Component} from 'react';
import axios from 'axios';

// const VEHICLE_TYPE_API_BASE_URL = "http://localhost:8080/api/vehicleTypes";
const VEHICLE_TYPE_API_BASE_URL = "https://car-dealership-cw.herokuapp.com/api/vehicleTypes";



class VehicleTypeService extends Component{

    constructor(props) {
        super(props);

        this.state = {}
    }


    getAll(){
        return axios.get(VEHICLE_TYPE_API_BASE_URL);
    }

    create(vehicleType){
        return axios.post(VEHICLE_TYPE_API_BASE_URL + "/create", vehicleType);
    }

    getById(id){
        return axios.get(VEHICLE_TYPE_API_BASE_URL + "/get/" + id);
    }

    update(vehicleType, vehicleTypeId){
        // debugger;
        return axios.post(VEHICLE_TYPE_API_BASE_URL + "/edit/" + vehicleTypeId, vehicleType);
    }

    delete(id){
        return axios.get(VEHICLE_TYPE_API_BASE_URL + "/delete/" + id);
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default new VehicleTypeService();