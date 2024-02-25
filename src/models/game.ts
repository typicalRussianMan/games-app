import { CompanyLite } from './company-lite';
import { GameCategory } from './game-category';

/** Game. */
export class Game {

  /** ID. */
  public readonly id: number;

  /** Name. */
  public readonly name: string;

  /** Company. */
  public readonly company: CompanyLite;

  /** Category. */
  public readonly category: GameCategory;

  /** Play count. */
  public readonly playCount: number;

  public constructor(data: Game) {
    this.category = data.category;
    this.company = data.company;
    this.id = data.id;
    this.name = data.name;
    this.playCount = data.playCount;
  }
}
