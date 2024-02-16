import { UserDto } from "../dtos/user.dto";
import { User } from "../user";
import { IMapperFromDto } from "./mapper";

class UserMapper implements IMapperFromDto<UserDto, User> {

  /** @inheritdoc */
  public fromDto(data: UserDto): User {
    return new User({
      email: data.email,
      firstName: data.firstName,
      id: data.id,
      lastName: data.lastName,
      nickName: data.nickName,
    })
  }
}

export const userMapper = new UserMapper();
