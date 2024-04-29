import axios from "axios";

const http = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("boilerplate_token")
      ? `Bearer ${localStorage.getItem("boilerplate_token")}`
      : null,
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

export const setAuthorizationHeader = (token: string) => {
  localStorage.setItem("boilerplate_token", token);
  http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const clearAuthorizationHeader = () => {
  localStorage.removeItem("boilerplate_token");
  http.defaults.headers.common["Authorization"] = null;
};

export default http;
