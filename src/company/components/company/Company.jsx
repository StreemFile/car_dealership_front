import React from 'react';
import {CompanyGetLeftSideContent, CompanyGetLogo, CompanyGetWrapper} from "../../../layouts/company/CompanyGetLayout";

const Company = () => {
    return (
        <CompanyGetWrapper>
            <CompanyGetLeftSideContent>
                <CompanyGetLogo></CompanyGetLogo>
                <h3>Твоє нове авто <br/> за вигідною ціною</h3>
            </CompanyGetLeftSideContent>
        </CompanyGetWrapper>
    );
}

export default Company;