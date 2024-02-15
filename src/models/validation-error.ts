import { AppError } from "./app-error";

/** Validation error. */
export class ValidationError<T> extends AppError {

  public readonly details: Readonly<Partial<Record<keyof T, string>>>;

  public constructor(data: ValidationError<T>) {
    super(data);
    this.details = data.details;
  }
}

/**
 * Checks if value is validation error.
 * @param value Value.
 */
export function isValidationError<T>(value: unknown): value is ValidationError<T> {
  return value instanceof ValidationError;
}
