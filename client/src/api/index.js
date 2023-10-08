import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080" });

// User
export const logIn = (formData) => API.post("/auth/login", formData);
export const register = (formData) => API.post("/auth/register", formData);
