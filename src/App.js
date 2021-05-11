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
import DealershipByIdComponent from "./components/dealership/DealershipByIdComponent";
import FooterComponent from "./components/GeneralComponents/FooterComponent";
import AutomobileSpecificationComponent from "./components/carSpecifications/AutomobileSpecificationComponent";
import DealershipGetAllComponent from "./components/dealership/DealershipGetAllComponent";
import EmployeeComponent from "./components/employee/EmployeeComponent";

function App() {

    const [isNeededToRerenderNavbar, setIsNeededToRerenderNavbar] = useState(false);

    const rerenderNavbar = (boolean) => setIsNeededToRerenderNavbar(boolean)

    return (
        <BrowserRouter>
            <MainWrapper>
                <NavbarComponent
                    isRerendered={isNeededToRerenderNavbar}
                    rerenderNavbar={rerenderNavbar}
                />
                <Switch style={{overflow: 'auto'}}>
                    <Route path="/customers" exact component={CustomerGetAllComponent}/>
                    <Route path="/customers/create" exact component={CustomerCreateComponent}/>
                    <Route path="/customers/get/:id" exact component={CustomerGetById}/>
                    <Route path="/customers/edit/:id" exact component={CustomerUpdateComponent}/>
                    <Route path="/company" exact component={CompanyComponent}/>
                    <Route path="/dealerships" exact component={DealershipGetAllComponent}/>
                    <Route path="/dealership/:city" exact
                           render={() => <DealershipByIdComponent
                               rerenderNavbar={rerenderNavbar}/>}
                    />
                    <Route path="/automobileSpecifications" exact component={AutomobileSpecificationComponent}/>
                    <Route path="/employees" exact component={EmployeeComponent}/>

                </Switch>
                <FooterComponent/>
            </MainWrapper>
        </BrowserRouter>
    );
}

export default App;
