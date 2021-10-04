import React from 'react';
import { Form, Button, Container, FloatingLabel, Row, Col } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Container>
                <Row className="d-flex align-items-center justify-content-center">
                    <Col xs={12} md={6} lg={6}>
                        <div className="w-100 mx-auto my-5 p-3 form-bg">
                            <h2 className="form-title mx-auto text-center">Become A Member</h2>
                            <p className="subtitle mx-auto text-center mb-3">Get Instance Access of our free courses.</p>
                            <Form>
                                <Row>
                                    <Col>
                                        <FloatingLabel controlId="floatingTextarea" label="First Name" className="mb-3">
                                            <Form.Control as="input" placeholder="Enter Your Name" />
                                        </FloatingLabel>
                                    </Col>
                                    <Col>
                                        <FloatingLabel controlId="floatingTextarea" label="Last Name" className="mb-3">
                                            <Form.Control as="input" placeholder="Enter Your Name" />
                                        </FloatingLabel>
                                    </Col>
                                </Row>

                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingPassword"
                                    label="Password"
                                    className="mb-3">
                                    <Form.Control type="password" placeholder="Password" />
                                </FloatingLabel>

                                <FloatingLabel
                                    className="mb-3"
                                    controlId="floatingTextarea2" label="Detail Information">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                    />
                                </FloatingLabel>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button className="btn-submit w-100" size="lg" type="submit">
                                    Submit Information
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;