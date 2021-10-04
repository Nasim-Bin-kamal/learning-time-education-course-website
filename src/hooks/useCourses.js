import { useEffect } from "react";
import { useState } from "react"

const useCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch(`./db.JSON`)
            .then(res => res.json())
            .then(data => setCourses(data))
            .catch(error => console.log(error));
    }, []);
    return [courses, setCourses];
}

export default useCourses;