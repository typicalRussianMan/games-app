import { FC, memo } from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { Game } from '../../../../../../models/game';
import { Point } from '../../../../../../utils/distance-between-points';

import './style.css';
import { PlayCount } from '../../../../../../components/PlayCount';
import { Distance } from '../../../../../../components/Distance';
import { CompanyInfo } from '../../../../../../components/CompanyInfo';

type Props = {

  /** Game. */
  readonly game: Game;

  /** Current user location. */
  readonly userLocation: Point;
};

const GameCardComponent: FC<Props> = ({ game, userLocation }) => (
  <div className='card'>
    <div className="card-image-container">
      <img className='card-image' src={game.posterUrl} />
    </div>
    <Typography
      className='card-name'
      component='span'
      variant='h5'
    >
      {game.name}
    </Typography>
    <PlayCount game={game} />
    <Distance from={game.company.address} to={userLocation} />
    <CompanyInfo company={game.company} />
    <Link to={`/${game.id}`}>
      <Button className='card-button' color='primary' variant='contained'>Play</Button>
    </Link>
  </div>
);

/** Game card. */
export const GameCard = memo(GameCardComponent);
