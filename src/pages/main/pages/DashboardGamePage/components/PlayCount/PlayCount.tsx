import { FC, memo } from 'react';
import { Typography } from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import { Game } from '../../../../../../models/game';

import './style.css';

type Props = {

  /** Game. */
  readonly game: Game;
};

const splitByThousands = (num: number): string => {
  let res = '';
  const str = num.toString();

  // eslint-disable-next-line for-direction
  for (let i = str.length - 1; i <= 0; i -= 3) {
    res = `${str[i - 2]}${str[i - 1]}${str[i]} ${str}`;
  }

  return res;
};

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
