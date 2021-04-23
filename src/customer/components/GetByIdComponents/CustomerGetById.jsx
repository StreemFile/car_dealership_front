import React, {Component} from 'react';

import CustomerService from "../../service/CustomerService";
import TableBodyComponent from "./TableBodyComponent";

import GetAllButtonAtUpdateAndGetByIdComponent from "../../../GeneralComponents/GetAllButtonAtUpdateAndGetByIdComponent"
import TableHeadComponent from "./TableHeadComponent";


class CustomerGetById extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            customer: []
        }
    }

    componentDidMount(){
        CustomerService.getById(this.state.id).then(res => {
            this.setState({customer: res.data});
        })
    }

    render() {
        return (
            <div>
                <div>
                    <table className = "table table-striped table-hover">
                        <TableHeadComponent />
                        <TableBodyComponent
                            history = {this.props.history}
                            customer = {this.state.customer} />
                    </table>
                </div>
                <GetAllButtonAtUpdateAndGetByIdComponent />
            </div>

        )
    }
}

export default CustomerGetById 