import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TopCourse from '../TopCourse/TopCourse';

const MainBody = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("./topCourse.json")
            .then(res => res.json())
            .then(data => setCourses(data))
            .catch(error => console.log(error));
    }, []);
    return (
        <div>
            <Container>
                <h1 className="text-center my-4">Top Courses</h1>
                <div>
                    <Row xs={1} md={2} lg={3} className="my-5">

                        {
                            courses?.map(course => <TopCourse key={course.courseId} course={course}></TopCourse>)
                        }
                    </Row>
                </div>
            </Container>

        </div>
    );
};

export default MainBody;