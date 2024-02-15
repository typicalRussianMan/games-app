import axios from "axios";
import { AuthApi } from "./auth.api";

const API_BASE_URL = 'https://games-app-pdmt.onrender.com/api';

/** Axios instance */
export const http = axios.create({
  baseURL: API_BASE_URL,
});

/** Authorization API. */
export const authApi = new AuthApi(http);
