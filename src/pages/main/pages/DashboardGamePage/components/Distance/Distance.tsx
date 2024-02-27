import { FC, memo } from 'react';
import RoomIcon from '@mui/icons-material/Room';
import { Typography } from '@mui/material';

import { Point, calculateDistanceBetweenPoints } from '../../../../../../utils/distance-between-points';

import './style.css';

type Props = {

  /** Start point. */
  readonly from: Point;

  /** End point. */
  readonly to: Point;
};

const formatDistance = (distance: number): string => {
  if (distance < 999) {
    return `${distance} m.`;
  }

  return `${Math.floor(distance / 1000)} km.`;
};

const DistanceComponent: FC<Props> = ({ from, to }) => (
  <div className="distance">
    <RoomIcon fontSize='medium' />
    <Typography variant='subtitle1' component='span'>
      { formatDistance(calculateDistanceBetweenPoints(from, to)) }
    </Typography>
  </div>
);

/** Distance. */
export const Distance = memo(DistanceComponent);
