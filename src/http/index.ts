import axios from "axios";
import localStorageConfig from "../config/local-storage.config";

const http = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem(localStorageConfig.accessToken)
      ? `Bearer ${localStorage.getItem(localStorageConfig.accessToken)}`
      : null,
  },
});

http.interceptors.request.use((config) => {
  return config;
});

http.interceptors.response.use((response) => {
  return response;
});

export const setAuthorizationHeader = (token: string) => {
  localStorage.setItem(localStorageConfig.accessToken, token);
  http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const clearAuthorizationHeader = () => {
  localStorage.removeItem(localStorageConfig.accessToken);
  http.defaults.headers.common["Authorization"] = null;
};

export default http;
