import axios from "axios";

const api = axios.create({
  baseURL: "https://e-com-backend-7-wm33.onrender.com/api", // matches your backend
});

export default api;
