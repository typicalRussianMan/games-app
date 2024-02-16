class StorageService {

  public get<T>(key: string): T | null {
    const value = localStorage.getItem(key);
    return value === null ? null : JSON.parse(value);
  }

  public set(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public delete(key: string): void {
    localStorage.removeItem(key);
  }
}

/** Storage service. */
export const storageService = new StorageService();
