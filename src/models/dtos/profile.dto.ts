import { AchievementFullDto } from './achievement-full.dto';
import { UserDto } from './user.dto';

/** Profile DTO. */
export type ProfileDto = UserDto & {

  /** Achievements. */
  readonly achievements: AchievementFullDto[];
};
