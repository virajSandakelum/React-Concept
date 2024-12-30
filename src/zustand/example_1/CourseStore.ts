import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Course {
    id: string;
    name: string;
    completed: boolean;
}

interface CourseStore {
    courses: Course[];
    addCourse: (course: Course) => void;
    removeCourse: (courseId: string) => void;
    toggleCourseStatus: (courseId: string) => void;
}

const courseStore = (set: any): CourseStore => ({
    courses: [],
    addCourse: (course) => {
        set((state: CourseStore) => ({
            courses: [...state.courses, course],
        }));
    },
    removeCourse: (courseId) => {
        set((state: CourseStore) => ({
            courses: state.courses.filter((course) => course.id !== courseId),
        }));
    },
    toggleCourseStatus: (courseId) => {
        set((state: CourseStore) => ({
            courses: state.courses.map((course) =>
                course.id === courseId ? { ...course, completed: !course.completed } : course
            ),
        }));
    },
});

const useCourseStore = create<CourseStore>()(
    devtools(
        persist(courseStore, {
            name: "courses", 
        })
    )
);

export default useCourseStore;
