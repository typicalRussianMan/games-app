import { InternalAxiosRequestConfig } from "axios";
import { API_BASE_URL } from ".";
import { tokenService } from "../services/token.service";

/**
 * Checks if a request should be intercepted.
 * @param config Request config.
 */
function shouldInterceptToken(config: InternalAxiosRequestConfig): boolean {
  return (config.baseURL?.startsWith(API_BASE_URL) ?? false);
}

/**
 * Appends authorization token to request.
 * @param config Request config.
 */
export function addAuthorizationTokenBeforeRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
  const token = tokenService.tokenValue;

  if (!shouldInterceptToken(config) || token === null) {
    return config;
  }

  const { headers } = config;

  if (headers === undefined) {
    throw new Error(
      'Axios did not pass any header. Please check your request.',
    );
  }

  config.headers.set('Authorization', token.token, true);

  return config;
}
