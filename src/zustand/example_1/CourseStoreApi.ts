import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import CourseService from "../../services/courseService"; 


interface Course {
    id: string;
    name: string;
    completed: boolean;
}

interface CourseStore {
    courses: Course[];
    loading: boolean;
    error: string | null;
    fetchCourses: () => Promise<void>;
    addCourse: (course: Course) => Promise<void>;
    removeCourse: (courseId: string) => Promise<void>;
    toggleCourseStatus: (courseId: string) => Promise<void>;
}

const courseStore = (set: any): CourseStore => ({
    courses: [],
    loading: false,
    error: null,

    fetchCourses: async () => {
        set({ loading: true, error: null });
        try {
            const data = await CourseService.fetchCourses();
            set({ courses: data, loading: false });
        } catch (error: any) {
            set({ error: error.message, loading: false });
        }
    },

    addCourse: async (course) => {
        set({ loading: true, error: null });
        try {
            await CourseService.addCourse(course);
            set((state: CourseStore) => ({
                courses: [...state.courses, course],
                loading: false,
            }));
        } catch (error: any) {
            set({ error: error.message, loading: false });
        }
    },

    removeCourse: async (courseId) => {
        set({ loading: true, error: null });
        try {
            await CourseService.removeCourse(courseId);
            set((state: CourseStore) => ({
                courses: state.courses.filter((course) => course.id !== courseId),
                loading: false,
            }));
        } catch (error: any) {
            set({ error: error.message, loading: false });
        }
    },

    toggleCourseStatus: async (courseId) => {
        set({ loading: true, error: null });
        try {
            const updatedCourse = await CourseService.toggleCourseStatus(courseId);
            set((state: CourseStore) => ({
                courses: state.courses.map((c) =>
                    c.id === courseId ? updatedCourse : c
                ),
                loading: false,
            }));
        } catch (error: any) {
            set({ error: error.message, loading: false });
        }
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
