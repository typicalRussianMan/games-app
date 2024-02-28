import { CompanyLiteDto } from './company-lite.dto';
import { GameCategoryDto } from './game-category.dto';

/** Game DTO. */
export type GameDto = {

  /** ID. */
  readonly id: number;

  /** Name. */
  readonly name: string;

  /** Company. */
  readonly company: CompanyLiteDto;

  /** Category. */
  readonly category: GameCategoryDto;

  /** Play count. */
  readonly playCount: number;

  /** Poster URL. */
  readonly posterUrl: string;

  /** Preview URL. */
  readonly previewUrl: string;
};
