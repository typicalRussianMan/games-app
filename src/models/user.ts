/** User. */
export class User {

  /** ID. */
  public readonly id: number;

  /** First name. */
  public readonly firstName: string;

  /** Last name. */
  public readonly lastName: string;

  /** Nick name. */
  public readonly nickName: string;

  /** Email. */
  public readonly email: string;

  /** Avatar. */
  public readonly avatar: string;

  public constructor(data: User) {
    this.email = data.email;
    this.firstName = data.firstName;
    this.id = data.id;
    this.lastName = data.lastName;
    this.nickName = data.nickName;
    this.avatar = data.avatar;
  }
}
