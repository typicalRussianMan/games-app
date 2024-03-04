import { Achievement } from '../achievement';
import { AchievementDto } from '../dtos/achievement.dto';

import { IMapperFromDto } from './mapper';

/** Achievement mapper instance. */
class AchievementMapper implements IMapperFromDto<AchievementDto, Achievement> {

  /** @inheritdoc */
  public fromDto(data: AchievementDto): Achievement {
    return new Achievement({
      description: data.description,
      id: data.id,
      title: data.title,
    });
  }
}

/** Achievement mapper instance. */
export const achievementMapper = new AchievementMapper();
