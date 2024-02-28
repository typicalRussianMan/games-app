import { FC } from 'react';

import './style.css';
import { CircularProgress } from '@mui/material';

/** Page loading spinner. */
export const PageLoading: FC = () => (
  <div className="loading-container">
    <CircularProgress size={100} />
  </div>
);
