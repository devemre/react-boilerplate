import axios from "axios";

const http = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      localStorage.getItem("boilerplate_token") &&
      `Bearer ${localStorage.getItem("boilerplate_token")}`,
  },
});

http.interceptors.request.use((config) => {
  console.log("request", config);
  return config;
});

http.interceptors.response.use((response) => {
  console.log("response", response);
  return response;
});

export default http;
