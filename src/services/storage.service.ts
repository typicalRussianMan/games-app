/** Storage service. */
class StorageService {

  /**
   * Gets a value from local storage.
   * @param key Key.
   */
  public get<T>(key: string): T | null {
    const value = localStorage.getItem(key);
    return value === null ? null : JSON.parse(value);
  }

  /**
   * Sets a new value to local storage.
   * @param key Key.
   * @param value Value.
   */
  public set(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Deletes a value from storage.
   * @param key Key.
   */
  public delete(key: string): void {
    localStorage.removeItem(key);
  }
}

/** Storage service instance. */
export const storageService = new StorageService();
