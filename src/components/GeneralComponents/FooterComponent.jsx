import React, {useState} from 'react';
import {Footer, FooterCopyright, FooterLogo, FooterCompanyInfo} from "../../layouts/FooterLayout";

const FooterComponent = () => {

    return (
        <Footer>
            <FooterLogo></FooterLogo>
            <FooterCopyright><span>&#169;</span>Volodymyr Moisei</FooterCopyright>
            <FooterCompanyInfo>
                Адрес: Мамаївці, провулок Заводський 11
                <br/>
                Телефон: +380996088364
                <br/>
                Пошта: yourcar@gmail.com
            </FooterCompanyInfo>

        </Footer>
    );
}

export default FooterComponent;