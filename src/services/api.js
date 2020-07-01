import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Luuck4s/Fashionista'
})

export default api;