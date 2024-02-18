import { ResponseCode } from './response-code';

type AppErrorConstructor = Pick<AppError, 'code' | 'message'>;

/** App error. */
export class AppError {

  /** Response code. */
  public readonly code: ResponseCode;

  /** Message. */
  public readonly message: string;

  public constructor(data: AppErrorConstructor) {
    this.code = data.code;
    this.message = data.message;
  }
}
