import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {MainWrapper} from "./layouts/MainWrapperLayout";

import CustomerGetAllComponent from './components/customer/GetAllComponents/CustomerGetAllComponent';
import CustomerCreateComponent from "./components/customer/CreateComponents/CustomerCreateComponent";
import CustomerGetById from "./components/customer/GetByIdComponents/CustomerGetById";
import CustomerUpdateComponent from "./components/customer/UpdateComponents/CustomerUpdateComponent";

import CompanyComponent from "./components/company/CompanyComponent";
import NavbarComponent from "./components/GeneralComponents/NavbarComponent";
import DealershipById from "./components/dealership/DealershipById";
import FooterComponent from "./components/GeneralComponents/FooterComponent";
import AutomobileSpecificationComponent from "./components/carSpecifications/AutomobileSpecificationComponent";

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
                    <Route path="/company" exact component={CompanyComponent}/>
                    <Route path="/dealerships" exact component={CompanyComponent}/>
                    <Route path="/dealership/:city" exact component={DealershipById}/>
                    <Route path="/automobileSpecifications" exact component={AutomobileSpecificationComponent}/>
                </Switch>
                <FooterComponent/>
            </MainWrapper>
        </BrowserRouter>
    );
}

export default App;
