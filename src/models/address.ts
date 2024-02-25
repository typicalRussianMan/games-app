/** Address. */
export class Address {

  /** Latitude. */
  public readonly lat: number;

  /** Longitude. */
  public readonly lng: number;

  /** Human readable address. */
  public readonly title: string;

  public constructor(data: Address) {
    this.lat = data.lat;
    this.lng = data.lng;
    this.title = data.title;
  }
}
