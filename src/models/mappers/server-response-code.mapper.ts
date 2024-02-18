import { ServerResponseCodeDto } from '../dtos/server-response-code.dto';
import { ResponseCode } from '../response-code';

import { IMapperFromDto } from './mapper';

/** Server response code mapper. */
class ServerResponseCodeMapper implements IMapperFromDto<ServerResponseCodeDto, ResponseCode> {

  private readonly FROM_DTO: Record<ServerResponseCodeDto, ResponseCode> = {
    [ServerResponseCodeDto.BadRequest]: ResponseCode.BadRequest,
    [ServerResponseCodeDto.Forbidden]: ResponseCode.Forbidden,
    [ServerResponseCodeDto.InternalError]: ResponseCode.InternalError,
    [ServerResponseCodeDto.NotFound]: ResponseCode.NotFound,
    [ServerResponseCodeDto.OK]: ResponseCode.OK,
    [ServerResponseCodeDto.Unauthorized]: ResponseCode.Unauthorized,
  };

  /** @inheritdoc */
  public fromDto(data: ServerResponseCodeDto): ResponseCode {
    return this.FROM_DTO[data];
  }
}

/** Server response code mapper instance. */
export const serverResponseCodeMapper = new ServerResponseCodeMapper();
