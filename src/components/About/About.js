import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import image from '../../utilities/images/about-img.png'
import './About.css'

const About = () => {

    return (
        <div className="about">
            <div className="about-header">
                <h1 className="text-center">ABOUT US</h1>
            </div>
            <Container>
                <Row xs={1} md={2} lg={2} className="mx-auto">
                    <Col xs={12} md={7} lg={7} className="my-5 mx-auto p-2">
                        <img className="img-fluid" src={image} alt="about" />
                    </Col>
                    <Col xs={12} md={5} lg={5} className="my-5 mx-auto p-2">
                        <div className="desc">
                            <h1 className="title">World’s largest selection of courses</h1>
                            <p>Online learning offers a new way to explore subjects you’re tomfoolery on the cheesed off I dropped a clanger owt to do with me bits passionate about explore subjects you’re tomfoolery trusted our partner online course.</p>
                            <ul>
                                <li className="point"><p>Access more then 100K online courses</p></li>
                                <li className="point"><p>Learn the latest skills</p></li>
                                <li className="point"><p>Upskill your organization.</p></li>
                            </ul>
                        </div>
                        <Button className="rounded-pill px-3 my-3" variant="danger">Get Started <i className="fas fa-arrow-right"></i></Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;