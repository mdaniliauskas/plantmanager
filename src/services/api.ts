import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.3:3333/' //colocar o ip da máquina
});

export default api;

