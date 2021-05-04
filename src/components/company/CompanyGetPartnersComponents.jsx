import React from 'react';
import {PartnerLogos} from "./PartnerLogos";
import {CompanyGetPartnerLogo, CompanyGetPartners} from "../../layouts/company/CompanyGetLayout";

const CompanyGetPartnersComponents = () => {
    return (
        <CompanyGetPartners>
            <div>
                <h3>Наші партнери</h3>
                {PartnerLogos.map((item, index) => {
                    return <CompanyGetPartnerLogo key={index} src={item}/>
                })}
            </div>
        </CompanyGetPartners>
    );
}

export default CompanyGetPartnersComponents;