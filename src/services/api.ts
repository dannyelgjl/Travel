import axios from 'axios';

const api = axios.create({
  baseURL: 'http://preprod-guanabara-gateway-smartbus.oreons.com/J3/clickbus/',
});

export default api;
