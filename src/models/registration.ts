export class Registration {

  /** First name. */
  public readonly firstName: string;

  /** Last name. */
  public readonly lastName: string;

  /** Nick name. */
  public readonly nickName: string;

  /** Email. */
  public readonly email: string;

  /** Password. */
  public readonly password: string;

  public constructor(data: Registration) {
    this.email = data.email;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.nickName = data.nickName;
    this.password = data.password;
  }
}
