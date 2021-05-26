import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {MainWrapper} from "./layouts/MainWrapperLayout";

import CompanyComponent from "./components/company/CompanyComponent";
import NavbarComponent from "./components/GeneralComponents/NavbarComponent";
import DealershipByIdComponent from "./components/dealership/DealershipByIdComponent";
import FooterComponent from "./components/GeneralComponents/FooterComponent";
import AutomobileSpecificationComponent from "./components/carSpecifications/AutomobileSpecificationComponent";
import DealershipGetAllComponent from "./components/dealership/DealershipGetAllComponent";
import EmployeeComponent from "./components/employee/EmployeeComponent";
import CustomerComponent from "./components/customer/CustomerComponent";
import AutomobileComponent from "./components/automobile/AutomobileComponent";
import AutomobileByIdComponent from "./components/automobile/AutomobileByIdComponent";
import AutomobileAddComponent from "./components/automobile/AutomobileAddComponent";
import AutomobileEditComponent from "./components/automobile/AutomobileEditComponent";
import PurchaseComponent from "./components/purchase/PurchaseComponent";
import PurchaseByIdComponent from "./components/purchase/PurchaseByIdComponent";

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
                    <Route path="/customers" exact component={CustomerComponent}/>
                    <Route path="/company" exact component={CompanyComponent}/>
                    <Route path="/dealerships" exact component={DealershipGetAllComponent}/>
                    <Route path="/dealership/:city" exact
                           render={() => <DealershipByIdComponent
                               rerenderNavbar={rerenderNavbar}/>}
                    />
                    <Route path="/automobileSpecifications" exact component={AutomobileSpecificationComponent}/>
                    <Route path="/employees" exact component={EmployeeComponent}/>
                    <Route path="/automobiles" exact component={AutomobileComponent}/>
                    <Route path="/orderedAutomobiles" exact render={() => <AutomobileComponent autosToGet="Замовлений"/>}/>
                    <Route path="/inStockAutomobiles" exact render={() => <AutomobileComponent autosToGet="В наявності"/>}/>
                    <Route path="/soldAutomobiles" exact render={() => <AutomobileComponent autosToGet="Проданий"/>}/>
                    <Route path="/automobile/get/:id" exact component={AutomobileByIdComponent}/>
                    <Route path="/automobile/edit/:id" exact component={AutomobileEditComponent}/>
                    <Route path="/automobile/add" exact component={AutomobileAddComponent}/>
                    <Route path="/purchases" exact component={PurchaseComponent}/>
                    <Route path="/purchase/get/:id" exact component={PurchaseByIdComponent}/>

                </Switch>
                <FooterComponent/>
            </MainWrapper>
        </BrowserRouter>
    );
}

export default App;
