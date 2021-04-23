import React from 'react';
import { NavLink } from "react-router-relative-link";

const GetAllButtonAtUpdateAndGetByIdComponent = () => {
    return (
        <div>
            <NavLink to="../../"><button className="btn btn-warning m-2" >Get all</button></NavLink>
        </div>
    );
}

export default GetAllButtonAtUpdateAndGetByIdComponent;