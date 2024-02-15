import { AppError } from "./app-error";

/** Validation error. */
export class ValidationError<T> extends AppError {

  public readonly details: Readonly<Partial<Record<keyof T, string>>>;

  public constructor(data: ValidationError<T>) {
    super(data);
    this.details = data.details;
  }
}

