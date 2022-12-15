import axios from "axios";

const api = axios.create({
	baseURL: 'http://localhost:8000',
});

api.interceptors.request.use((config) => {
	config.headers['Authorization'] = `Token ${sessionStorage.getItem('token')}`;
	return config;
});

export const non_auth_api = axios.create({
	baseURL: 'http://localhost:8000',
});

export default api;
