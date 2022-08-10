import axios from 'axios';

const axiosBackend = axios.create({
  baseURL: process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/v1/"
    : "https://janidev.herokuapp.com/api/v1/",
  withCredentials: true,
});

export default axiosBackend;
