import axios from "axios";

// Create an axios instance with default settings
const api = axios.create({
  baseURL: "http://localhost:5001", // backend URL (update if different)
  headers: {
    "Content-Type": "application/json",
  },
});

// Example GET request
export const getData = (endpoint) => api.get(endpoint);

// Example POST request
export const postData = (endpoint, data) => api.post(endpoint, data);

// Example PUT request
export const putData = (endpoint, data) => api.put(endpoint, data);

// Example DELETE request
export const deleteData = (endpoint) => api.delete(endpoint);

export default api;
