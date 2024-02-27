import { FC, memo } from 'react';
import { Button, Typography } from '@mui/material';

import { Game } from '../../../../../../models/game';

import './style.css';

type Props = {

  /** Game. */
  readonly game: Game;
};

const GameCardComponent: FC<Props> = ({ game }) => (
  <div className='card'>
    <img className='card-image' src="https://upload.wikimedia.org/wikipedia/commons/4/4a/100x100_logo.png" />
    <Typography
      className='card-name'
      component='span'
      variant='h5'
    >
      {game.name}
    </Typography>
    <Typography
      className='play-count'
      component='span'
      variant='body1'
    >
      {game.playCount}
    </Typography>
    <Button color='primary' variant='contained'>Play</Button>
  </div>
);

/** Game card. */
export const GameCard = memo(GameCardComponent);
