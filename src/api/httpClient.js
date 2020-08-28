import axios from 'axios';

const httpClient = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-type': 'application/json'
    }
});

const authInterceptor = config => {
    config.headers['Authorization'] = localStorage.getItem('token');
    return config;
};

httpClient.interceptors.request.use(authInterceptor);

export default httpClient;
