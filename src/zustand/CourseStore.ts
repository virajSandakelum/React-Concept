import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// Define the Course type
interface Course {
    id: string;
    name: string;
    completed: boolean;
}

// Define the store types
interface CourseStore {
    courses: Course[];
    addCourse: (course: Course) => void;
    removeCourse: (courseId: string) => void;
    toggleCourseStatus: (courseId: string) => void;
}

// Define the store logic
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

// Create the Zustand store with devtools and persist middleware
const useCourseStore = create<CourseStore>()(
    devtools(
        persist(courseStore, {
            name: "courses", // Key name in local storage
        })
    )
);

export default useCourseStore;
