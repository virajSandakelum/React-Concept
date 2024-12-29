import axios, { AxiosRequestConfig } from 'axios'
import { removeLocalStorage } from '../utils/localStorage'
import { getCurrentLanguage, languageConvert } from '../utils/getCurrentLanguage'
import useUserDataStore from '../zustand/store/userDataStore';


const baseURL: string = (window as any).VITE_BASE_URL || import.meta.env.VITE_BASE_URL


export default async function api(
    method: 'get' | 'post' | 'put' | 'delete' | 'patch',
    endpoint: string,
    data: any = null,
    isAuth: boolean = false,
    customHeaders: Record<string, string> = {}
) {
    try {
        let selectedLan = languageConvert(getCurrentLanguage());

        let headers = {
            'Content-Type': 'application/json',
            // check_sum: 'sDROCe3IBNTMDAqBA75Dv1hWcnA=',
            // app_version: '0.0.0.5',
            'Accept-Language': selectedLan
        }

        if (!isAuth) {
            const token = useUserDataStore.getState().userDetails?.accessToken;
            if (!token) {
                throw new Error(
                    'Authentication token not found in local storage'
                )
            }
            headers = {
                Authorization: `Bearer ${token}`,
                // check_sum: 'sDROCe3IBNTMDAqBA75Dv1hWcnA=',
                // app_version: '0.0.0.5',
                'Accept-Language': selectedLan,
                ...customHeaders,
            }
        }
        const config: AxiosRequestConfig = {
            headers: headers,
        }

        let response;
        switch (method) {
            case 'get':
                response = await axios.get(`${baseURL}${endpoint}`, config)
                break
            case 'post':
                response = await axios.post(
                    `${baseURL}${endpoint}`,
                    data,
                    config
                )
                break
            case 'patch':
                response = await axios.patch(
                    `${baseURL}${endpoint}`,
                    data,
                    config
                )
                break
            default:
                throw new Error(`Unsupported HTTP method: ${method}`);
        }
        return response;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 401) {
            console.error('Unauthorized access. Redirecting to login...');
            removeLocalStorage('access_token');
            window.location.href = "/session-timeout";
        } else {
            console.error(
                `Error with ${method.toUpperCase()} request to ${endpoint}:`,
                error
            )
            window.location.href = "/service-down";
        }
        throw error;
    }
}
