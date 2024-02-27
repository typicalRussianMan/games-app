import { FC, useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

import { PagedList } from '../../../../models/paged-list';
import { Game } from '../../../../models/game';
import { gameApi } from '../../../../api';

import { GameCard } from './components/GameCard';
import './style.css';

type Coordinates = Pick<GeolocationCoordinates, 'latitude' | 'longitude'>;

const DEFAULT_MAP_CENTER: Coordinates = {
  latitude: 56.035665,
  longitude: 92.875777,
};

/** Dashboard game page. */
export const DashboardGamePage: FC = () => {
  const [gameList, setGameList] = useState<PagedList<Game> | null>(null);
  const [center, setCenter] = useState<Coordinates>(DEFAULT_MAP_CENTER);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        setCenter(pos.coords);
      },
    );
  }, []);

  useEffect(() => {
    gameApi.getGames({
      bounds: {
        bottom: center.latitude - 1,
        left: center.longitude - 1,
        right: center.longitude + 1,
        top: center.latitude + 1,
      },
    }).then(games => {
      setGameList(games);
    });
  }, [center]);

  if (gameList === null) {
    return <CircularProgress />;
  }

  const cards = gameList.items.map(e => (
    <GameCard game={e} key={e.id} />
  ));

  return (
    <div className='card-container'>
      {...cards}
    </div>
  );
};
