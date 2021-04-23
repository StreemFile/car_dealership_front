import React, {useEffect, useState} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import LogoImage from "../images/logo.png"
import styled from "styled-components";
import DealershipService from "../dealership/service/DealershipService";

const Logo = styled.img`
  height: 50px;
  width: auto;
`

const NavbarComponent = (props) => {
    const [dealerships, setDealerships] = useState([]);

    useEffect(() => {
        DealershipService.getAll().then(res => setDealerships(res.data))
    })

    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand style={{marginLeft: "25px"}} to="/" as={NavLink}>YourCar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link to="/company" as={NavLink}>Про нас</Nav.Link>
                    <NavDropdown title="Автосалон" id="collasible-nav-dropdown">
                        {
                            dealerships.map(dealership => {
                                return <NavDropdown.Item
                                    key={dealership.id}
                                    to={"/dealership/" + dealership.cityEnglish}
                                    as={NavLink}
                                    onClick={() => {
                                        props.getDealership(dealership.id)
                                    }}>
                                         {dealership.city}
                                </NavDropdown.Item>
                            })
                        }
                        <NavDropdown.Item to="/dealerships" as={NavLink}>Всі</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link to="/automobiles" as={NavLink}>Автомобілі</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown title="Специфікації автомобіля" id="collasible-nav-dropdown">
                        <NavDropdown.Item to="/vehicletypes" as={NavLink}>Типи кузова</NavDropdown.Item>
                        <NavDropdown.Item to="/makes" as={NavLink}>Марки</NavDropdown.Item>
                        <NavDropdown.Item to="/models" as={NavLink}>Моделі</NavDropdown.Item>
                        <NavDropdown.Item to="/producingCountries" as={NavLink}>Країни-виробники</NavDropdown.Item>
                        <NavDropdown.Item to="/exteriorColors" as={NavLink}>Кольори автомобіля</NavDropdown.Item>
                        <NavDropdown.Item to="/interiorColors" as={NavLink}>Кольори салону</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link to="/customers" as={NavLink}>Клієнти</Nav.Link>
                    <Nav.Link to="/employees" as={NavLink}>Працівники</Nav.Link>
                    <Nav.Link to="/purchases" as={NavLink}>Продажі</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;