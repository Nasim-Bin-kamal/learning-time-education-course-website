import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../utilities/images/logo.png'
import './NavMenu.css'

const NavMenu = () => {
    const activeStyle = {
        fontWeight: "700",
        color: "#f5d76e"
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" variant="lignt" className="py-2 d-flex">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="img-fluid w-50" src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
                            <NavLink className="menu" activeStyle={activeStyle} to="/home">Home</NavLink>
                            <NavLink className="menu" activeStyle={activeStyle} to="/about">About Us</NavLink>
                            <NavLink className="menu" activeStyle={activeStyle} to="/courses">Courses</NavLink>
                            <NavLink className="menu" activeStyle={activeStyle} to="/contact">Contact Us</NavLink>

                        </Nav>
                        <Nav>
                            <Button variant="success">Login</Button>
                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default NavMenu;