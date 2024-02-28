import { GameDto } from '../dtos/game.dto';
import { Game } from '../game';

import { companyLiteMapper } from './company-lite.mapper';
import { gameCategoryMapper } from './game-category.mapper';
import { IMapperFromDto } from './mapper';
import { PagedListMapper } from './paged-list.mapper';

/** Game mapper. */
class GameMapper implements IMapperFromDto<GameDto, Game> {

  /** @inheritdoc */
  public fromDto(data: GameDto): Game {
    return new Game({
      category: gameCategoryMapper.fromDto(data.category),
      company: companyLiteMapper.fromDto(data.company),
      id: data.id,
      name: data.name,
      playCount: data.playCount,
      posterUrl: data.posterUrl,
      previewUrl: data.previewUrl,
    });
  }
}

/** Game mapper instance. */
export const gameMapper = new GameMapper();

/** Game paged list mapper. */
export const gameListMapper = new PagedListMapper(gameMapper);
