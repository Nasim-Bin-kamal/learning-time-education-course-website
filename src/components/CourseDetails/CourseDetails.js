// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { Card, Col, Container, Row, Button } from 'react-bootstrap';
// import { useHistory, useParams } from 'react-router';


// const CourseDetails = () => {
//     const { id } = useParams()
//     console.log(id);
//     const [courses, setCourses] = useState([]);
//     console.log(courses);
//     const [courseDetails, setCourseDetails] = useState({});
//     const { courseId, courseName, image, price, description } = courseDetails || {};
//     const history = useHistory();
//     useEffect(() => {
//         fetch('./db.json')
//             .then(res => res.json())
//             .then(data => setCourses(data));
//     }, []);



//     useEffect(() => {
//         const foundCourse = courses.find(course => course.courseId === id);
//         console.log(foundCourse);
//         setCourseDetails(foundCourse);

//     });

//     const handlePreviousPage = () => {
//         history.push("/courses");
//     }
//     return (
//         <div>

//             <Container className="w-75">
//                 <h3 className="my-5">Full Details of <span className="text-primary">{courseName}</span></h3>
//                 <Row className="border border-3 rounded-3 shadow-lg">
//                     <Col md={4}>
//                         <Card className="mx-auto my-3">
//                             <Card.Img className="img-fluid" variant="top" src={image} />
//                         </Card>
//                     </Col>
//                     <Col md={8}>
//                         <Card.Body>
//                             <h3>Course Name: {courseName}</h3>
//                             <h4>Course Id: {courseId}</h4>
//                             <h5>Course Fee: {price}</h5>
//                             <Card.Text>
//                                 <b>Course Description:</b> {description}
//                             </Card.Text>
//                         </Card.Body>
//                     </Col>
//                 </Row>
//                 <Button
//                     onClick={handlePreviousPage}
//                     className="mx-auto d-flex align-items center my-3"
//                     variant="warning"
//                     size="md"
//                 >Back To All Meals</Button>
//             </Container>

//         </div>
//     );
// };

// export default CourseDetails;