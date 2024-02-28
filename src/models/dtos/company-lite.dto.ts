import { AddressDto } from './address.dto';

/** Company lite DTO. */
export type CompanyLiteDto = {

  /** ID. */
  readonly id: number;

  /** Name. */
  readonly name: string;

  /** Logo URL. */
  readonly logoUrl: string;

  /** Address. */
  readonly address: AddressDto;
};
