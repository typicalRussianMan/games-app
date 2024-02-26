/** Game category. */
export class GameCategory {

  /** ID. */
  public readonly id: number;

  /** Name. */
  public readonly name: string;

  public constructor(data: GameCategory) {
    this.id = data.id;
    this.name = data.name;
  }
}
