import { PagedListDto } from '../dtos/paged-list.dto';
import { PagedList } from '../paged-list';

import { IMapperFromDto } from './mapper';

/** Paged list mapper. */
export class PagedListMapper<TDto, T> implements IMapperFromDto<PagedListDto<TDto>, PagedList<T>> {

  public constructor(
    private readonly mapper: IMapperFromDto<TDto, T>,
  ) {
  }

  /** @inheritdoc */
  public fromDto(data: PagedListDto<TDto>): PagedList<T> {
    return new PagedList({
      items: data.items.map(this.mapper.fromDto),
      limit: data.limit,
      offset: data.offset,
      total: data.totalCount,
    });
  }
}
