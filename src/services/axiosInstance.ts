import axios from 'axios';
import { BACKEND_URL_1, BACKEND_URL_2 } from '@/utils/constants';

// Create the first Axios instance
const axiosInstance1 = axios.create({
	baseURL: BACKEND_URL_1,
	withCredentials: true
});

// Create the second Axios instance
const axiosInstance2 = axios.create({
	baseURL: BACKEND_URL_2,
	withCredentials: true
});

// Add response interceptors to handle 401 errors for both instances
const handleResponseError = (err: any) => {
	const error = err.response;
	if (error.status === 401 && error.config) {
		localStorage.clear();
		window.location.href = '/login';
	}
	return Promise.reject(err);
};

axiosInstance1.interceptors.response.use(undefined, handleResponseError);
axiosInstance2.interceptors.response.use(undefined, handleResponseError);

export { axiosInstance1, axiosInstance2 };
