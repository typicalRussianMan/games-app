import { RegistrationDto } from '../dtos/registration';
import { Registration } from '../registration';

import { IMapperToDto } from './mapper';

/** Registration mapper. */
class RegistrationMapper implements IMapperToDto<RegistrationDto, Registration> {

  /** @inheritdoc */
  public toDto(data: Registration): RegistrationDto {
    return {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
    };
  }
}

/** Registration mapper instance. */
export const registrationMapper = new RegistrationMapper();
