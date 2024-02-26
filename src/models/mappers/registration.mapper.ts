import { RegistrationDto } from '../dtos/registration';
import { Registration } from '../registration';

import { IMapperFromDto, IMapperToDto } from './mapper';

/** Registration mapper. */
class RegistrationMapper implements
IMapperToDto<RegistrationDto, Registration>,
IMapperFromDto<RegistrationDto, Partial<Registration>, 'validationDto'> {

  /** @inheritdoc */
  public toDto(data: Registration): RegistrationDto {
    return {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
    };
  }

  /** @inheritdoc */
  public fromValidationDto(data: Partial<RegistrationDto>): Partial<Registration> {
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
