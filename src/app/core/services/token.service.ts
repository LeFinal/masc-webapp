import { Injectable } from '@angular/core';

/**
 * Token prefix applied to all tokens.
 */
const TokenPrefix = 'masc-webapp';
/**
 * Comma separated list of roles.
 */
export const TokenRoles = 'roles';
/**
 * The assigned device id for memorization.
 */
export const TokenDeviceID = 'device-id';

/**
 * Used for providing a wrapper service for accessing {@link localStorage}.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Injectable({
  providedIn: 'root',
})
export class TokenService {

  /**
   * Creates a token by combining {@link TokenPrefix} and the passed token.
   *
   * @param token The token to create the one from.
   * @private
   */
  private static createToken(token: string): string {
    return `${ TokenPrefix }-${ token }`;
  }

  /**
   * Wrapper for {@link localStorage}.
   *
   * @param token The token to set the value for.
   * @param value The value to set.
   */
  setItem(token: string, value: string): void {
    localStorage.setItem(TokenService.createToken(token), value);
  }

  /**
   * Wrapper for {@link localStorage}.
   *
   * @param token The token to retrieve the value for.
   */
  getItem(token: string): string | undefined {
    return localStorage.getItem(TokenService.createToken(token)) ?? undefined;
  }

  /**
   * Wrapper for {@link localStorage}.
   *
   * @param token The token to remove.
   */
  removeItem(token: string): void {
    localStorage.removeItem(TokenService.createToken(token));
  }

  /**
   * Wrapper for {@link localStorage}.
   */
  clear(): void {
    localStorage.clear();
  }
}
