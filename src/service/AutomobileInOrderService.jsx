import React, {Component} from 'react';
import axios from 'axios';

const AUTOMOBILE_IN_ORDER_API_BASE_URL = "http://localhost:8080/api/automobileInOrders"
// const AUTOMOBILE_IN_ORDER_API_BASE_URL = "https://car-dealership-cw.herokuapp.com/api/automobileInOrders"

class AutomobileInOrderService extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    getAll(){
        return axios.get(AUTOMOBILE_IN_ORDER_API_BASE_URL);
    }

    create(automobileInOrder){
        return axios.post(AUTOMOBILE_IN_ORDER_API_BASE_URL + "/create", automobileInOrder);
    }

    getById(id){
        return axios.get(AUTOMOBILE_IN_ORDER_API_BASE_URL + "/get/" + id);
    }

    update(automobileInOrder, automobileInOrderId){
        return axios.post(AUTOMOBILE_IN_ORDER_API_BASE_URL + "/edit/" + automobileInOrderId, automobileInOrder);
    }


    getByAutomobileId(id){
        return axios.get(AUTOMOBILE_IN_ORDER_API_BASE_URL + "/get/by-automobile-" + id)
    }

    delete(id){
        return axios.get(AUTOMOBILE_IN_ORDER_API_BASE_URL + "/delete/" + id);
    }
    deleteByAutomobileId(id){
        return axios.get(AUTOMOBILE_IN_ORDER_API_BASE_URL + "/delete/by-automobile-" + id);
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default new AutomobileInOrderService()