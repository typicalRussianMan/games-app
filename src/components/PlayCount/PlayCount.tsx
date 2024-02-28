import { FC, memo } from 'react';
import { Typography } from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import { Game } from '../../models/game';

import './style.css';

type Props = {

  /** Game. */
  readonly game: Game;
};

const splitByThousands = (num: number): string => num
  .toString()
  .split('')
  .reverse()
  .reduce((ac, cur) => ac
    .split(' ')
    .join('').length % 3 === 0 ?
    `${cur} ${ac}` :
    `${cur}${ac}`, '');

const formatPlayCount = (count: number): string => {
  if (count < 999) {
    return count.toString();
  }

  if (count < 999999) {
    return splitByThousands(count);
  }

  return '1 000 000+';
};

const PlayCountComponent: FC<Props> = ({ game }) => (
  <div className='play-count'>
    <SportsEsportsIcon fontSize='medium' />
    <Typography variant='subtitle1' component='span'>{formatPlayCount(game.playCount)}</Typography>
  </div>
);

/** Play count. */
export const PlayCount = memo(PlayCountComponent);
