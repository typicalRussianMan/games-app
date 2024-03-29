import { Address } from './address';

/** Company lite. */
export class CompanyLite {

  /** ID. */
  public readonly id: number;

  /** Name. */
  public readonly name: string;

  /** Address. */
  public readonly address: Address;

  /** Logo URL. */
  public readonly logoUrl: string;

  public constructor(data: CompanyLite) {
    this.address = data.address;
    this.id = data.id;
    this.name = data.name;
    this.logoUrl = data.logoUrl;
  }
}
