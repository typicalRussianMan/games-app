import { ValidationErrorDto } from "../dtos/validation-error.dto";
import { ValidationError } from "../validation-error";
import { appErrorMapper } from "./app-error.mapper";
import { IMapperFromDto } from "./mapper";

class ValidationErrorMapper implements IMapperFromDto<ValidationErrorDto, ValidationError<unknown>> {

  /** @inheritdoc */
  public fromDto<T>(data: ValidationErrorDto): ValidationError<T> {
    return new ValidationError<T>({
      ...appErrorMapper.fromDto(data),
      details: data.details as unknown as Record<keyof T, string>,
    })
  }
}

export const validationErrorMapper = new ValidationErrorMapper();
