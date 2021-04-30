import React, {useState} from 'react';
import {Footer, FooterCopyright, FooterLogo, FooterCompanyInfo, FooterClickableInfo} from "../layouts/FooterLayout";
import CompanyService from "../service/CompanyService";

const FooterComponent = () => {
    const [companyInfo, setCompanyInfo] = useState({});
    CompanyService.getAll().then(result => setCompanyInfo(
        {
            city: result.data[0].cityOfTheMainOffice,
            address: result.data[0].addressOfTheMainOffice,
            telephone: result.data[0].telephoneOfTheMainOffice,
            email: result.data[0].email
        }
    ));
    return (
        <Footer>
            <FooterLogo></FooterLogo>
            <FooterCopyright><span>&#169;</span>Volodymyr Moisei</FooterCopyright>
            <FooterCompanyInfo>
                Адрес: {companyInfo.city}, {companyInfo.address}
                <br/>
                Телефон: {companyInfo.telephone}
                <br/>
                Пошта: {companyInfo.email}
            </FooterCompanyInfo>

        </Footer>
    );
}

export default FooterComponent;