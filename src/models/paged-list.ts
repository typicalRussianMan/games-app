type PagedListConstructor<T> = Pick<
  PagedList<T>,
  'items' | 'limit' | 'offset' | 'total'
>;

/** Paged list. */
export class PagedList<T> {

  /** Offset. */
  public readonly offset: number;

  /** Limit. */
  public readonly limit: number;

  /** Total items count. */
  public readonly total: number;

  /** Items. */
  public readonly items: readonly T[];

  /** Is first page. */
  public get isFirstPage(): boolean {
    return this.offset === 0;
  }

  /** Is last page. */
  public get isLastPage(): boolean {
    return this.total <= this.offset + this.limit;
  }

  /** Current page. */
  public get page(): number {
    return Math.floor(this.offset / this.limit);
  }

  public constructor(data: PagedListConstructor<T>) {
    this.items = data.items;
    this.limit = data.limit;
    this.offset = data.offset;
    this.total = data.total;
  }
}
