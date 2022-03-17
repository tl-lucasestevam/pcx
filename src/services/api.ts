import axios from "axios";

const api = axios.create({
  baseURL: "http://34.203.205.165:3000",
});

export default api;
