import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const acc_token = localStorage.getItem("token");
    if (acc_token) {
      config.headers.Authorization = `${acc_token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

const apiServices = {
  signin: async (data) => {
    const res = await api.post("/auth/signin", data);
    return res.data;
  },
  signup: async (data) => {
    const { fullName, email, password } = data;
    const res = await api.post("/auth/signup", { fullName, email, password });
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
