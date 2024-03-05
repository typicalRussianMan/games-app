import { AchievementFull } from './achievement-full';
import { User } from './user';

/** Profile. */
export class Profile extends User {

  /** Achievements. */
  public readonly achievements: AchievementFull[];

  public constructor(data: Profile) {
    super(data);
    this.achievements = data.achievements;
  }
}
