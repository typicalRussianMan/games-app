/** Achievement. */
export class Achievement {

  /** ID. */
  public readonly id: number;

  /** Title. */
  public readonly title: string;

  /** Description. */
  public readonly description: string;

  public constructor(data: Achievement) {
    this.description = data.description;
    this.id = data.id;
    this.title = data.title;
  }
}
