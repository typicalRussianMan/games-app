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

  /** Poster URL. */
  public readonly posterUrl: string;

  /** Preview URL. */
  public readonly previewUrl: string;

  public constructor(data: Game) {
    this.category = data.category;
    this.company = data.company;
    this.id = data.id;
    this.name = data.name;
    this.playCount = data.playCount;
    this.posterUrl = data.posterUrl;
    this.previewUrl = data.previewUrl;
  }
}
