import axios from 'axios';

const baseURL = process.env.REACT_APP_QUESTION_APP_URL;
const token = process.env.REACT_APP_QUESTION_APP_KEY;

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    }
    return response;
  },
  (error) => Promise.reject(error),
);

export default axios;
