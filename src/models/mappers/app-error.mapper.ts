import { AppError } from '../app-error';
import { AppErrorDto } from '../dtos/app-error.dto';

import { IMapperFromDto } from './mapper';
import { serverResponseCodeMapper } from './server-response-code.mapper';

/** App error mapper. */
class AppErrorMapper implements IMapperFromDto<AppErrorDto, AppError> {

  /** @inheritdoc */
  public fromDto(data: AppErrorDto): AppError {
    return new AppError({
      code: serverResponseCodeMapper.fromDto(data.code),
      message: data.message,
    });
  }
}

/** App error mapper instance. */
export const appErrorMapper = new AppErrorMapper();
