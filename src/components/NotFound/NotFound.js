import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import notfoundImg from '../../utilities/images/not-found.jpg'
const NotFound = () => {
    const history = useHistory();
    const handleBackToHome = () => {
        history.push("/home");
    }
    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <img src={notfoundImg} alt="" />
            <Button className="my-3" onClick={handleBackToHome} variant="warning px-4" size="lg">Back To Home</Button>
        </div>
    );
};

export default NotFound;