import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const TopCourse = ({ course }) => {
    const { image, courseName, price } = course || {};
    return (
        <div>
            <Col md={6}>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{courseName}</Card.Title>
                        <Card.Text>
                            Course Fee:{price}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="success">Details</Button>
                    </Card.Footer>
                </Card>
            </Col>

        </div>
    );
};

export default TopCourse;