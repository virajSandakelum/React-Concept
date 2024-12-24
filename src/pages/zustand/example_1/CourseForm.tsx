import { useState } from "react";
import useCourseStore from "../../../zustand/example_1/CourseStore";
import "./styles/courseForm.css"; 


const CourseForm: React.FC = () => {
    const addCourse = useCourseStore((state) => state.addCourse);
    const [courseTitle, setCourseTitle] = useState("");

    const handleCourseSubmit = () => {
        if (!courseTitle.trim()) {
            return alert("Please add a course title");
        }
        addCourse({
            id: Math.ceil(Math.random() * 1000).toString(),
            name: courseTitle.trim(),
            completed: false,
        });
        setCourseTitle("");
    };

    return (
        <div className="form-container">
            <input
                type="text"
                className="form-input"
                placeholder="Enter course title"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
            />
            <button className="form-button" onClick={handleCourseSubmit}>
                Add Course
            </button>
        </div>
    );
};

export default CourseForm;
