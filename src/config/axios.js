import axios from 'axios';

const axiosClient = axios.create({
    baseURL : 'https://www.superheroapi.com/api.php/2420701678062618/'
});

export default axiosClient;