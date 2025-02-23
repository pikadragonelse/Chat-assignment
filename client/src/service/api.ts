import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000', // Thay thế bằng URL của API bạn
  timeout: 10000, // Thời gian timeout (tuỳ chọn)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
