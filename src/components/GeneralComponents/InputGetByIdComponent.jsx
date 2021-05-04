import React, {Component} from 'react';
import { NavLink } from "react-router-relative-link";

class InputGetByIdComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: ''
        }
    }

    handleChange = e => {
        this.setState({
            id: e.target.value
        })
};

    render() {
        return (
            <div>
                <form autoComplete="off">
                    <div className="input-group  ms-2 mb-3" style={{width: '500px'}}>
                        <input type="search" name="id" className="form-control"
                               id="idInput" placeholder="Search by id"
                               onChange={this.handleChange} />
                        <NavLink to={"./get/" + this.state.id}>
                            <button className="btn btn-success">Search</button>
                        </NavLink>
                    </div>
                </form>
            </div>
        );
    }
}

export default InputGetByIdComponent;