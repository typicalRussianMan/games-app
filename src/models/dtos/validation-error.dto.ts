import { AppErrorDto } from './app-error.dto';

/** Validation error. */
export type ValidationErrorDto = AppErrorDto & {

  /** Detailed information about the error. */
  readonly details: {

    /** Key - field containing the error, value - description of the error. */
    readonly [fieldName: string]: string;
  };
};

/**
 * Checks if error is validation error.
 * @param err Error.
 */
export function isValidationErrorDto(err: unknown): err is ValidationErrorDto {
  return 'details' in (err as ValidationErrorDto);
}
