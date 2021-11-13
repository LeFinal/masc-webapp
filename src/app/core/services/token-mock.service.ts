import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

/**
 * The mock version of {@link TokenService}. This will however not be used when the `useMocks` is set for the current environment but only
 * for tests.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Injectable({
  providedIn: 'root',
})
export class TokenMockService implements TokenService {

  /**
   * The mock store to store the values in.
   */
  store: { [key: string]: string | null } = {};

  clear(): void {
    this.store = {};
  }

  getItem(token: string): string | null {
    return this.store[token];
  }

  setItem(token: string, value: string): void {
    this.store[token] = value;
  }

  removeItem(token: string): void {
    this.store[token] = null;
  }
}
