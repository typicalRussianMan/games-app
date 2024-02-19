/** Optional fields for object. */
export type OptionalFields<T extends object> = {
  [K in keyof T]: T[K] | undefined;
};
