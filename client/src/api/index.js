import axios from "axios";
import { getCookie } from "../components/utils/Services";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const acc_token = getCookie("acc_token");
    if (acc_token) {
      config.headers.Authorization = `${acc_token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

const apiServices = {
  signin: async (logindata) => {
    const res = await api.post("/auth/signin", logindata);
    return res.data;
  },
  signup: async (data) => {
    const res = await api.post("/auth/signup", data);
    return res.data;
  },
  getProfile: async () => {
    const res = await api.get("/auth/getProfile");
    return res.data;
  },
};

const urlServices = {
  createShort: async (urlLong) => {
    const res = await api.post("/url/create", { urlLong });
    return res.data;
  },
  getAll: async () => {
    const res = await api.post("/url/getAll");
    return res.data;
  },
};

export { apiServices, urlServices };
