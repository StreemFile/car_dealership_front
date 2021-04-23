import React, {Component} from 'react';

import InputGetByIdComponent from "../../../GeneralComponents/InputGetByIdComponent.jsx";
import TableBodyComponent from "./TableBodyComponent";

import TableHeadComponent from "./TableHeadComponent.jsx";
import CreateButtonComponent from "../../../GeneralComponents/CreateButtonComponent.jsx";

class CustomerGetAllComponent extends Component {
    render() {
        return (
            <div>
                <table className="table table-striped table-hover">
                    <TableHeadComponent/>
                    <TableBodyComponent/>
                </table>
                <CreateButtonComponent/>
                <InputGetByIdComponent/>
            </div>
        )
    }
}

export default CustomerGetAllComponent;