/** Statuses for server responses */
export enum ServerResponseCodeDto {

  /** Positive response. */
  OK = 200,

  /** Invalid request body. */
  BadRequest = 400,

  /** Attempting to access the resource without authorization. */
  Unauthorized = 401,

  /** Blocking user access to the resource. */
  Forbidden = 403,

  /** Resource not found. */
  NotFound = 404,

  /** Internal server error. */
  InternalError = 500,
}
