// CourseService.ts
// const API_ENDPOINT = "https://dummyapi.com/courses";

// Simulated API responses
const dummyCourses = [
    { id: "1", name: "Math 101", completed: false },
    { id: "2", name: "Science 101", completed: true },
    { id: "3", name: "History 101", completed: false },
];

const CourseService = {
    fetchCourses: async () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(dummyCourses), 1000); // Simulate network delay
        });
    },

    addCourse: async (course: { id: string; name: string; completed: boolean }) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                dummyCourses.push(course);
                resolve(course);
            }, 500); // Simulate network delay
        });
    },

    removeCourse: async (courseId: string) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = dummyCourses.findIndex((course) => course.id === courseId);
                if (index > -1) {
                    dummyCourses.splice(index, 1);
                    resolve(true);
                } else {
                    reject(new Error("Course not found"));
                }
            }, 500); // Simulate network delay
        });
    },

    toggleCourseStatus: async (courseId: string) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const course = dummyCourses.find((c) => c.id === courseId);
                if (course) {
                    course.completed = !course.completed;
                    resolve(course);
                } else {
                    reject(new Error("Course not found"));
                }
            }, 500); // Simulate network delay
        });
    },
};

export default CourseService;
