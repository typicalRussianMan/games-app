import { ProfileDto } from '../dtos/profile.dto';
import { Profile } from '../profile';

import { achievementFullMapper } from './achievement-full.mapper';

import { IMapperFromDto } from './mapper';

/** Profile mapper. */
class ProfileMapper implements IMapperFromDto<ProfileDto, Profile> {

  /** @inheritdoc */
  public fromDto(data: ProfileDto): Profile {
    return new Profile({
      email: data.email,
      firstName: data.firstName,
      id: data.id,
      lastName: data.lastName,
      nickName: data.nickName,
      achievements: data.achievements.map(achievementFullMapper.fromDto),
    });
  }
}

/** Profile mapper instance. */
export const profileMapper = new ProfileMapper();
