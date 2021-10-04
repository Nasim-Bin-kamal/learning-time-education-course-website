import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import useCourses from '../../hooks/useCourses';


const Courses = () => {
    const [courses] = useCourses([]);
    return (
        <div>
            <Container>
                <h2 className="text-center mt-4 text-primary">All Courses</h2>
                <h5 className="text-center my-2 mb-5">See All Courses and Pick Your Favourite One.</h5>
                <div>
                    <Row xs={1} md={2} lg={3}>
                        {
                            courses?.map(course => <Course
                                key={course.courseId}
                                course={course}></Course>)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Courses;