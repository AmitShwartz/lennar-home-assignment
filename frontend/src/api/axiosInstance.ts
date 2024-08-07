import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://api.aviationstack.com",
});

export default axiosInstance;
