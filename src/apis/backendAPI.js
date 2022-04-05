import axios from "axios";

const BACKEND_SERVICE_URL = process.env.REACT_APP_BACKEND_SERVER_URL;

const token = `Bearer ${JSON.parse(localStorage.getItem("token"))}`;

const backendAPI = axios.create({
  baseURL: `${BACKEND_SERVICE_URL}`,
  withCredentials: true,
  headers: {
    Authorization: token,
  },
});

export default backendAPI;
