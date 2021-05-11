import React, {Component} from 'react';
import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees"
// const EMPLOYEE_API_BASE_URL = "https://car-dealership-cw.herokuapp.com/api/employees"

class EmployeeService extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    getAll(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    create(employee){
        return axios.post(EMPLOYEE_API_BASE_URL + "/create", employee);
    }

    getById(id){
        return axios.get(EMPLOYEE_API_BASE_URL + "/get/" + id);
    }

    update(employee, employeeId){
        // debugger;
        return axios.post(EMPLOYEE_API_BASE_URL + "/edit/" + employeeId, employee);
    }

    delete(id){
        return axios.get(EMPLOYEE_API_BASE_URL + "/delete/" + id);
    }

    sortBy(sortType) {
        return axios.get(EMPLOYEE_API_BASE_URL + "/get/" + sortType);
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default new EmployeeService()