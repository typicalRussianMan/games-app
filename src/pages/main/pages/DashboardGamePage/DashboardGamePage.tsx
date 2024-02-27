import { FC, useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

import { PagedList } from '../../../../models/paged-list';
import { Game } from '../../../../models/game';
import { gameApi } from '../../../../api';
import { Point } from '../../../../utils/distance-between-points';

import { GameCard } from './components/GameCard';
import './style.css';

const DEFAULT_MAP_CENTER: Point = {
  lat: 56.035665,
  lng: 92.875777,
};

/** Dashboard game page. */
export const DashboardGamePage: FC = () => {
  const [gameList, setGameList] = useState<PagedList<Game> | null>(null);
  const [center, setCenter] = useState<Point>(DEFAULT_MAP_CENTER);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        setCenter({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
    );
  }, []);

  useEffect(() => {
    gameApi.getGames({
      bounds: {
        bottom: center.lat - 0.1,
        left: center.lng - 0.1,
        right: center.lng + 0.1,
        top: center.lng + 0.1,
      },
    }).then(games => {
      setGameList(games);
    });
  }, [center]);

  if (gameList === null) {
    return <CircularProgress />;
  }

  const cards = gameList.items.map(e => (
    <GameCard userLocation={center} game={e} key={e.id} />
  ));

  return (
    <div className='card-container'>
      {...cards}
    </div>
  );
};
