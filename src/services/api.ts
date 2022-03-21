import axios from "axios";
import { destroyCookie, parseCookies } from "nookies";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL as string,
});

api.interceptors.request.use(
  (response) => {
    const { "pcx.token": token } = parseCookies();
    if (token) {
      response!.headers!["Authorization"] = "Bearer " + token;
    }
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      destroyCookie(null, "pcx.token");
    }
    Promise.reject(error);
  }
);

export default api;
