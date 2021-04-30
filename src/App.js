import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {MainWrapper} from "./layouts/MainWrapperLayout";

import CustomerGetAllComponent from './customer/components/GetAllComponents/CustomerGetAllComponent';
import CustomerCreateComponent from "./customer/components/CreateComponents/CustomerCreateComponent";
import CustomerGetById from "./customer/components/GetByIdComponents/CustomerGetById";
import CustomerUpdateComponent from "./customer/components/UpdateComponents/CustomerUpdateComponent";

import Company from "./company/components/company/Company";
import NavbarComponent from "./GeneralComponents/NavbarComponent";
import DealershipById from "./dealership/components/dealership-city/DealershipById";
import FooterComponent from "./GeneralComponents/FooterComponent";

function App() {
    return (
        <BrowserRouter>
            <MainWrapper>
                <NavbarComponent/>
                <Switch style={{overflow: 'auto'}}>
                    <Route path="/customers" exact component={CustomerGetAllComponent}/>
                    <Route path="/customers/create" exact component={CustomerCreateComponent}/>
                    <Route path="/customers/get/:id" exact component={CustomerGetById}/>
                    <Route path="/customers/edit/:id" exact component={CustomerUpdateComponent}/>
                    <Route path="/company" exact component={Company}/>
                    <Route path="/dealerships" exact component={Company}/>
                    <Route path="/dealership/:city" exact component={DealershipById}/>
                </Switch>
                <FooterComponent/>
            </MainWrapper>
        </BrowserRouter>
    );
}

export default App;
