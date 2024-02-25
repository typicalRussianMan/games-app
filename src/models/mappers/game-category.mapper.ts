import { GameCategoryDto } from '../dtos/game-category.dto';
import { GameCategory } from '../game-category';

import { IMapperFromDto } from './mapper';

/** Game category mapper. */
class GameCategoryMapper implements IMapperFromDto<GameCategoryDto, GameCategory> {

  /** @inheritdoc */
  public fromDto(data: GameCategoryDto): GameCategory {
    return new GameCategory({
      id: data.id,
      name: data.name,
    });
  }
}

/** Game category mapper instance. */
export const gameCategoryMapper = new GameCategoryMapper();
