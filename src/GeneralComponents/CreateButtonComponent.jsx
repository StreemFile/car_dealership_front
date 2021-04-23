import React from 'react';
import { NavLink } from "react-router-relative-link";

const CreateButtonComponent = () => {
    return (
        <div>
            <NavLink to="./create">
                <button type="submit" className="btn btn-success m-2">Create</button>
            </NavLink>
        </div>
    );
}

export default CreateButtonComponent;