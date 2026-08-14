import axios from "axios";

const api = axios.create({
  baseURL: "https://news-portal-backend-sath.onrender.com/api",
});

export default api;
