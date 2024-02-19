import { OptionalFields } from '../../utils/types/optional-fields';
import { ValidationErrorDto } from '../dtos/validation-error.dto';
import { ValidationError } from '../validation-error';

import { appErrorMapper } from './app-error.mapper';
import { IMapperFromDto } from './mapper';

/** Validation error mapper. */
class ValidationErrorMapper {

  /**
   * Maps validation error from DTO.
   * @param data Data.
   * @param mapper Validation error details mapper.
   */
  public fromDto<T>(
    data: ValidationErrorDto,
    mapper: IMapperFromDto<OptionalFields<any>, OptionalFields<Record<keyof T, string>>, 'validationDto'>,
  ): ValidationError<T> {
    return new ValidationError<T>({
      ...appErrorMapper.fromDto(data),
      details: mapper.fromValidationDto(data.details),
    });
  }
}

/** Validation error mapper instance. */
export const validationErrorMapper = new ValidationErrorMapper();
