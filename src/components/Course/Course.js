import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Course = ({ course }) => {
    const { image, courseId, courseName, price } = course || {};
    const history = useHistory();
    const handleShowDetails = () => {
        history.push(`/course/${courseId}`);
    }
    return (
        <div>
            <Col md={12} className="m-2 p-2 border border-3 rounded-3 shadow-lg" >
                <Card className="mx-auto">
                    <Card.Img variant="top" src={image} style={{ width: "100%", height: "200px" }} />
                    <Card.Body>
                        <Card.Title>{courseName}</Card.Title>
                        <h5>Course ID: {courseId}</h5>
                        <Card.Text>
                            Course Fee: ${price}
                        </Card.Text>
                    </Card.Body>

                    <Button
                        onClick={handleShowDetails}
                        variant="success w-50 mx-auto">See Details
                    </Button>


                </Card>
            </Col >
        </div>
    );
};

export default Course;