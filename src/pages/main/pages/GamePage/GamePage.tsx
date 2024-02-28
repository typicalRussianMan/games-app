import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, CircularProgress, Typography } from '@mui/material';

import { Game } from '../../../../models/game';
import { Point } from '../../../../utils/distance-between-points';
import { gameApi } from '../../../../api';
import { CompanyMap } from '../../../../components/CompanyMap';

import './index.css';
import { PlayCount } from '../../../../components/PlayCount';
import { Distance } from '../../../../components/Distance';

/** Game page. */
export const GamePage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [game, setGame] = useState<Game | null>(null);
  const [location, setLocation] = useState<Point | null>(null);
  const { gameId } = useParams();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
    );
  }, []);

  useEffect(() => {
    if (location === null || gameId === undefined) {
      return;
    }
    setIsLoading(true);

    gameApi.getGame(Number(gameId), location ?? undefined).then(newGame => {
      setGame(newGame);
      setIsLoading(false);
    });
  }, [location, gameId]);

  if (isLoading || game === null || location === null) {
    return <CircularProgress />;
  }

  return (
    <div className="game-container">
      <div className="game-preview">
        <Typography variant='h2' component='span'>Preview</Typography>
      </div>
      <div className="inner-container">
        <Button variant='contained' className='play-button'>Play now!</Button>
        <Typography variant='h3' component='h2'>{game.name}</Typography>
        <PlayCount game={game} />
        <Distance from={game.company.address} to={location} />
        <div>
          <Typography
            variant='body1'
            component='span'
            className='address'
          >
            {game.company.address.title}
          </Typography>
          <CompanyMap company={game.company} />
        </div>
      </div>

    </div>
  );
};
