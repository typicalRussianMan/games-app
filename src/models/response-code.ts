/** Response code. */
export enum ResponseCode {

  /** Positive response. */
  OK = 'OK',

  /** Invalid request body. */
  BadRequest = 'BadRequest',

  /** Attempting to access the resource without authorization. */
  Unauthorized = 'Unauthorized',

  /** Blocking user access to the resource. */
  Forbidden = 'Forbidden',

  /** Resource not found. */
  NotFound = 'NotFound',

  /** Internal server error. */
  InternalError = 'InternalError',
}

const TO_READABLE: Record<ResponseCode, string> = {
  [ResponseCode.BadRequest]: 'Bad request',
  [ResponseCode.Forbidden]: 'Forbidden',
  [ResponseCode.InternalError]: 'Internal server error',
  [ResponseCode.NotFound]: 'Resource not found',
  [ResponseCode.OK]: 'Ok',
  [ResponseCode.Unauthorized]: 'Unauthorized',
};

/**
 * Converts response code to readable value.
 * @param responseCode Response code.
 */
export function toReadableResponseCode(responseCode: ResponseCode): string {
  return TO_READABLE[responseCode];
}
