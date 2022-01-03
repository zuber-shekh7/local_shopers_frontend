import axios from "axios";

const BACKEND_SERVICE_URL = process.env.REACT_APP_BACKEND_SERVER_URL;

const sellerAPI = axios.create({
  baseURL: `${BACKEND_SERVICE_URL}/api/sellers/`,
});

export default sellerAPI;
