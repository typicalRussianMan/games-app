import { AddressDto } from './address.dto';

/** Company lite DTO. */
export type CompanyLiteDto = {

  /** ID. */
  readonly id: number;

  /** Name. */
  readonly name: string;

  /** Address. */
  readonly address: AddressDto;
};
