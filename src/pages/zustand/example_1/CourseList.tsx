import React, { Fragment } from "react";
import useCourseStore from "../../../zustand/example_1/CourseStore";
import "./styles/courseList.css"; 


// interface Course {
//     id: number;
//     name: string;
//     completed: boolean;
// }

const CourseList: React.FC = () => {
    // Typed Zustand selectors
    const courses = useCourseStore((state) => state.courses); 
    const removeCourse = useCourseStore((state) => state.removeCourse);
    const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus); 

    return (
        <ul className="course-list">
            {courses.map((course) => (
                <Fragment key={course.id}>
                    <li
                        className={`course-item ${
                            course.completed ? "completed" : "not-completed"
                        }`}
                    >
                        <div className="course-info">
                            <input
                                className="course-checkbox"
                                checked={course.completed}
                                type="checkbox"
                                onChange={() => toggleCourseStatus(course.id)}
                                title={`Mark ${course.name} as ${
                                    course.completed ? "incomplete" : "completed"
                                }`}
                                aria-label={`Mark ${course.name} as ${
                                    course.completed ? "incomplete" : "completed"
                                }`}
                            />
                            <span className="course-name">{course.name}</span>
                        </div>
                        <button
                            className="delete-button"
                            onClick={() => removeCourse(course.id)}
                            title={`Delete course "${course.name}"`}
                            aria-label={`Delete course ${course.name}`}
                        >
                            Delete
                        </button>
                    </li>
                </Fragment>
            ))}
        </ul>
    );
};

export default CourseList;
