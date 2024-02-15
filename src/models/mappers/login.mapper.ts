import { LoginDto } from "../dtos/login.dto";
import { Login } from "../login";
import { IMapperToDto } from "./mapper";

/** Login mapper. */
class LoginMapper implements IMapperToDto<LoginDto, Login> {

  /** @inheritdoc */
  public toDto(data: Login): LoginDto {
    return {
      email: data.email,
      password: data.password,
    }
  }
}

export const loginMapper = new LoginMapper();
