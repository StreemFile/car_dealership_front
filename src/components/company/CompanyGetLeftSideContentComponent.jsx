import React from 'react';
import {
    CompanyGetFirstSlogan,
    CompanyGetLeftSideContent,
    CompanyGetLogo, CompanyGetSecondSlogan
} from "../../layouts/company/CompanyGetLayout";
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";

const CompanyGetLeftSideContentComponent = () => {
    return (
        <CompanyGetLeftSideContent>
            <CompanyGetLogo/>
            <CompanyGetFirstSlogan>Твоє нове авто <br/> за вигідною ціною</CompanyGetFirstSlogan>
            <CompanyGetSecondSlogan>Продаж авто з-за кордону <br/>Наші клієнти обирають
                найкраще</CompanyGetSecondSlogan>
            <NavLink to="/automobiles/search">
                <Button variant="warning">
                    Пошук авто
                </Button>{' '}
            </NavLink>
        </CompanyGetLeftSideContent>
    );
}

export default CompanyGetLeftSideContentComponent;