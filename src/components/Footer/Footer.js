import React from 'react';
import { Col, Container, Row, Button, InputGroup, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../utilities/images/logo-bg.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer mx-auto">
            <Container>
                <Row className="py-5 mx-auto">
                    <Col sm={12} md={4}>
                        <img className="img-fluid w-50 mb-3" src={logo} alt="" />
                        <p><small>We always try to offer better course for our students.We are working with the best courses with the best instructors.</small></p>
                        <h4 className="text-white">Social Links</h4>
                        <div className="d-flex justify-content-start align-items-center my-3">
                            <i className="fab fa-facebook-f me-4"></i>
                            <i className="fab fa-instagram me-4"></i>
                            <i className="fab fa-twitter me-4"></i>
                            <i className="fab fa-youtube me-4"></i>
                        </div>
                    </Col>
                    <Col sm={12} md={4} className="mx-auto text-center">
                        <h5 className="text-white">Quick Navigation</h5>
                        <ul className="quickNav">
                            <li>
                                <NavLink className="menu-item" to="/home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="menu-item" to="/about">About Us</NavLink>
                            </li>
                            <li>
                                <NavLink className="menu-item" to="/courses">Courses</NavLink>
                            </li>
                            <li>
                                <NavLink className="menu-item" to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={12} md={4}>
                        <h5 className="text-white mb-3">Newsletter</h5>

                        <InputGroup className="my-4">
                            <FormControl
                                type="email"
                                placeholder="Enter your email"
                                aria-label="Enter your email"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-warning" id="button-addon2">
                                Subscribe
                            </Button>
                        </InputGroup>
                        <p>We're on a mission to help people learn, grow and achieve more in life.</p>
                    </Col>
                </Row>

            </Container>
            <div className="p-4 text-center fw-lighter footer-end" >
                <p>Copyright 2021 | All Rights Reserved By Learning Time</p>
            </div>
        </div>
    );
};

export default Footer;