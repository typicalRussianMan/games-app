import { Typography } from '@mui/material';
import { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';

import './AuthPage.css';

const AuthPageComponent: FC = () => (
  <div className='layout'>
    <div className='logo'>
      <Typography variant='h3' component='span'>App Logo</Typography>
    </div>
    <Outlet />
  </div>
);

/** Auth page. */
export const AuthPage = memo(AuthPageComponent);
