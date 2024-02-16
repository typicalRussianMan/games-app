import { RegistrationDto } from "../dtos/registration";
import { Registration } from "../registration";
import { IMapperToDto } from "./mapper";

class RegistrationMapper implements IMapperToDto<RegistrationDto, Registration> {

  public toDto(data: Registration): RegistrationDto {
    return {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
    }
  }
}

export const registrationMapper = new RegistrationMapper();
