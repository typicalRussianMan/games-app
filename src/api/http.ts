import axios from "axios";
import { AuthApi } from "./auth.api";
import { addAuthorizationTokenBeforeRequest } from "./interceptors";

export const API_BASE_URL = 'https://games-app-pdmt.onrender.com/api';

/** Axios instance */
export const http = axios.create({
  baseURL: API_BASE_URL,
  headers: {},
});

http.interceptors.request.use(addAuthorizationTokenBeforeRequest);

/** Authorization API. */
export const authApi = new AuthApi(http);
