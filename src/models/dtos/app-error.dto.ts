import { ServerResponseCodeDto } from './server-response-code.dto';

/** General app error. */
export type AppErrorDto = {

  /** Server response code. */
  readonly code: ServerResponseCodeDto;

  /** General information about the error. */
  readonly message: string;
};
