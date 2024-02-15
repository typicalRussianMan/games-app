import { Token } from '../models/token';
import { storageService } from './storage.service';

const TOKEN_KEY = '==== GAMES APP TOKEN ===';

class TokenService {

  public tokenValue: Token | null;

  public constructor() {
    this.tokenValue = storageService.get(TOKEN_KEY);
  }

  /**
   * Set new token value.
   * @param newToken New token.
   */
  public setToken(newToken: Token) {
    this.tokenValue = newToken;
    storageService.set(TOKEN_KEY, newToken.token);
  }

  public deleteToken(): void {
    this.tokenValue = null;
    storageService.delete(TOKEN_KEY);
  }
}

/** Token service. */
export const tokenService = new TokenService();
