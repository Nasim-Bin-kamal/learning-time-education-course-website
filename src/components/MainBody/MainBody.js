import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import TopCourse from '../TopCourse/TopCourse';

const MainBody = () => {
    const [courses] = useCourses([]);
    return (
        <div>
            <Container>
                <h1 className="text-center my-5">Top Courses</h1>
                <div>
                    <Row>
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