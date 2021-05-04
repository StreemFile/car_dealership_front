import React from 'react';
import {
    CompanyGetDealershipPhoto,
    CompanyGetWrapper
} from "../../layouts/company/CompanyGetLayout";

import DealershipPhoto from "../../images/dealership.jpg";

import CompanyGetLeftSideContentComponent from "./CompanyGetLeftSideContentComponent";
import CompanyGetPartnersComponents from "./CompanyGetPartnersComponents";
import CompanyGetRightSideContentComponent from "./CompanyGetRightSideContentComponent";

const CompanyComponent = () => {
    return (
        <CompanyGetWrapper>
            <CompanyGetLeftSideContentComponent/>
            <CompanyGetDealershipPhoto src={DealershipPhoto}/>
            <CompanyGetRightSideContentComponent/>
            <CompanyGetPartnersComponents/>
        </CompanyGetWrapper>
    );
}

export default CompanyComponent;