import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API,
});

instance.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = (token ? `Bearer ${token}` : '');
    config.headers.ContentType = 'application/json';
    return config;
});

export const scrape = (url) => {
    return instance.post('/scrape/', { url });
}

export const searchAndReduce = (searchQuery) => {
    return instance.post('/scrape/search-and-reduce', { searchQuery });
}

export const searchKeyword = (searchQuery) => {
    return instance.post('/scrape/search', { searchQuery });
}

export const getLoggedInUser = () => {
    const token = localStorage.getItem("token");
    return instance.get('/users/logged');
}