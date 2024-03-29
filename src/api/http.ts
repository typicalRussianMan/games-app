import axios from 'axios';

import { AuthApi } from './auth.api';
import { addAuthorizationTokenBeforeRequest } from './interceptors';
import { GameApi } from './game.api';

/** API base URL. */
export const API_BASE_URL = 'https://games-app-pdmt.onrender.com/api';

/** Axios instance. */
export const http = axios.create({
  baseURL: API_BASE_URL,
});

http.interceptors.request.use(addAuthorizationTokenBeforeRequest);

/** Authorization API. */
export const authApi = new AuthApi(http);

/** Game API. */
export const gameApi = new GameApi(http);
