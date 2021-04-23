import React from 'react';
import { NavLink } from "react-router-relative-link";

const EditButtonAtGetAllComponent = (props) => {
    return (
        <div>
            <NavLink to={`./edit/${props.id}`}>
                <button className="btn btn-warning mt-1" type="submit" >Edit</button>
            </NavLink>
        </div>
    );
}

export default EditButtonAtGetAllComponent;