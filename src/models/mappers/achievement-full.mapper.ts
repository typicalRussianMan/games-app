import { AchievementFull } from '../achievement-full';
import { AchievementFullDto } from '../dtos/achievement-full.dto';

import { IMapperFromDto } from './mapper';

/** Achievement full mapper. */
class AchievementFullMapper implements IMapperFromDto<AchievementFullDto, AchievementFull> {

  /** @inheritdoc */
  public fromDto(data: AchievementFullDto): AchievementFull {
    return new AchievementFull({
      description: data.description,
      id: data.id,
      isCollected: data.isCollected,
      title: data.title,
    });
  }
}

/** Achievement full mapper instance. */
export const achievementFullMapper = new AchievementFullMapper();
