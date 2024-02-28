import { Axios, isAxiosError } from 'axios';

import { GameCategory } from '../models/game-category';
import { GameCategoryDto } from '../models/dtos/game-category.dto';
import { gameCategoryMapper } from '../models/mappers/game-category.mapper';
import { appErrorMapper } from '../models/mappers/app-error.mapper';
import { PagedList } from '../models/paged-list';
import { Game } from '../models/game';
import { PagedListDto } from '../models/dtos/paged-list.dto';
import { GameDto } from '../models/dtos/game.dto';
import { gameListMapper, gameMapper } from '../models/mappers/game.mapper';
import { Point } from '../utils/distance-between-points';

type Bounds = {

  /** Left. */
  readonly left: number;

  /** Right. */
  readonly right: number;

  /** Top. */
  readonly top: number;

  /** Bottom. */
  readonly bottom: number;
};

type SelectGameFilters = {

  /** Bounds. */
  readonly bounds: Bounds;

  /** Offset. */
  readonly offset?: number;

  /** Limit. */
  readonly limit?: number;
};

/** Game API. */
export class GameApi {

  public constructor(
    private readonly http: Axios,
  ) {}

  /** Fetches list of the game categories. */
  public async getCategories(): Promise<readonly GameCategory[]> {
    try {
      const result = await this.http.get<GameCategoryDto[]>('/games/categories');

      return result.data.map(gameCategoryMapper.fromDto);
    } catch (err: unknown) {
      if (isAxiosError(err)) {
        throw appErrorMapper.fromDto(err.response?.data);
      }

      throw err;
    }
  }

  /**
   * Gets games.
   * @param filters Filters.
   */
  public async getGames(filters: SelectGameFilters): Promise<PagedList<Game>> {
    const searchParams = new URLSearchParams({
      left: filters.bounds.left.toString(),
      right: filters.bounds.right.toString(),
      top: filters.bounds.top.toString(),
      bottom: filters.bounds.bottom.toString(),
    });

    if (filters.limit) {
      searchParams.set('limit', filters.limit.toString());
    }

    if (filters.offset) {
      searchParams.set('offset', filters.offset.toString());
    }

    try {
      const result = await this.http.get<PagedListDto<GameDto>>(`/games?${searchParams.toString()}`);

      return gameListMapper.fromDto(result.data);
    } catch (err) {
      if (isAxiosError(err)) {
        throw appErrorMapper.fromDto(err.response?.data);
      }

      throw err;
    }
  }

  /**
   * Gets game by ID.
   * @param id ID.
   * @param options Options.
   */
  public async getGame(id: number, options?: Point): Promise<Game> {
    const searchParams = new URLSearchParams();

    if (options !== undefined) {
      searchParams.set('lat', options.lat.toString());
      searchParams.set('lng', options.lng.toString());
    }

    const searchParamsString = options === undefined ?
      '' :
      `?${searchParams.toString()}`;

    try {
      const result = await this.http.get<GameDto>(`/games/${id}${searchParamsString}`);

      return gameMapper.fromDto(result.data);
    } catch (err) {
      if (isAxiosError(err)) {
        throw appErrorMapper.fromDto(err.response?.data);
      }

      throw err;
    }
  }
}
