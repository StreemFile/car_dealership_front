import React, {Component} from 'react';
import axios from 'axios';

const PURCHASE_API_BASE_URL = "http://localhost:8080/api/purchases"
// const PURCHASE_API_BASE_URL = "https://car-dealership-cw.herokuapp.com/api/purchase"

class PurchaseService extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getAll(){
        return axios.get(PURCHASE_API_BASE_URL);
    }

    create(purchase){
        return axios.post(PURCHASE_API_BASE_URL + "/create", purchase);
    }

    getById(id){
        return axios.get(PURCHASE_API_BASE_URL + "/get/" + id);
    }

    update(purchase, purchaseId){
        // debugger;
        return axios.post(PURCHASE_API_BASE_URL + "/edit/" + purchaseId, purchase);
    }

    delete(id){
        return axios.get(PURCHASE_API_BASE_URL + "/delete/" + id);
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default new PurchaseService()