import axios from "axios";

const URL = `${import.meta.env.VITE_APP_API_URL}:${
    import.meta.env.VITE_APP_API_PORT
}`;


const api = axios.create({
    baseURL: URL,
});


api.interceptors.request.use((response) => {
    const token = localStorage.getItem("token");
    if (token) {
        response.headers.Authorization = `Bearer ${token}`;
    }
    return response;
});

export default api;