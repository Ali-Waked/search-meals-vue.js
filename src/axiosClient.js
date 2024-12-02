import axios from 'axios';
const axiosClient = axios.create({
    // baseURL: 'https://some-domain.com/api/',
    baseURL: import.meta.env.VITE_API_BASE_URL,
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
})

export default axiosClient;