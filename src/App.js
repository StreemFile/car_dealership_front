import React, {useState} from 'react';
import './App.css';
import styled from "styled-components";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import CustomerGetAllComponent from './customer/components/GetAllComponents/CustomerGetAllComponent';
import CustomerCreateComponent from "./customer/components/CreateComponents/CustomerCreateComponent";
import CustomerGetById from "./customer/components/GetByIdComponents/CustomerGetById";
import CustomerUpdateComponent from "./customer/components/UpdateComponents/CustomerUpdateComponent";
import NavbarComponent from "./GeneralComponents/NavbarComponent";
import Company from "./company/components/company/Company";
import DealershipById from "./dealership/components/dealership-city/DealershipById";

function App() {
    const setDealershipIdCallBack = (id) => {
        setDealershipId(id);
    }
    const [dealershipId, setDealershipId] = useState();
    return (
            <BrowserRouter>
                <NavbarComponent getDealership={setDealershipIdCallBack}/>
                <Switch>
                    <Route path="/customers" exact component={CustomerGetAllComponent}/>
                    <Route path="/customers/create" exact component={CustomerCreateComponent}/>
                    <Route path="/customers/get/:id" exact component={CustomerGetById}/>
                    <Route path="/customers/edit/:id" exact component={CustomerUpdateComponent}/>
                    <Route path="/company" exact component={Company}/>
                    <Route path="/dealerships" exact component={Company}/>
                    <Route path="/dealership/:city" exact render={() => <DealershipById dealershipId={dealershipId}/>}/>
                </Switch>
            </BrowserRouter>
    );
}

export default App;
