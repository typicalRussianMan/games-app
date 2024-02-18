import { Token } from '../models/token';

import { storageService } from './storage.service';

const TOKEN_KEY = '==== GAMES APP TOKEN ===';

/** Token service. */
class TokenService {

  /** Token. */
  public tokenValue: Token | null;

  public constructor() {
    this.tokenValue = storageService.get(TOKEN_KEY);
  }

  /**
   * Set new token value.
   * @param newToken New token.
   */
  public setToken(newToken: Token): void {
    this.tokenValue = newToken;
    storageService.set(TOKEN_KEY, newToken);
  }

  /**
   * Deletes token from storage.
   */
  public deleteToken(): void {
    this.tokenValue = null;
    storageService.delete(TOKEN_KEY);
  }
}

/** Token service instance. */
export const tokenService = new TokenService();
