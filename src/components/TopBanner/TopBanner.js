import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './TopBanner.css'
import bannerImage from '../../utilities/images/banner-image.png'

const TopBanner = () => {
    return (
        <div className="banner py-5">
            <Container>
                <Row className=" d-flex justify-content-center align-items-center my-3 mx-auto">
                    <Col sm={6} md={5}>
                        <div className="text-white mx-auto">
                            <h1 className="title">Learning Online Becomes Easier</h1>
                            <p>Take Great Online Courses AnyWhere In The World.We are serving important courses for you.Learn interesting courses with our experts.</p>
                            <Button className="rounded-pill px-3 my-3" variant="danger">Get Started <i className="fas fa-arrow-right"></i></Button>
                        </div>
                    </Col>
                    <Col sm={6} md={7}>
                        <img className="img-fluid p-2" src={bannerImage} alt="bannerImage" />
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default TopBanner;