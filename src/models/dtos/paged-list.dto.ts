/** Paged list DTO. */
export type PagedListDto<T> = {

  /** Offset. */
  readonly offset: number;

  /** Limit. */
  readonly limit: number;

  /** Total items count. */
  readonly totalCount: number;

  /** Items. */
  readonly items: readonly T[];
};
