import { AchievementDto } from './achievement.dto';

/** Achievement full DTO. */
export type AchievementFullDto = AchievementDto & {

  /** Whether is achievement is collected. */
  readonly isCollected: boolean;
};
